import { Anchor } from '@/components/ui/Anchor';
import { canonicalPath } from '@/libs/path';
import { parseRelations, parseProduct } from '@/libs/technology-map';
import { search } from '@/libs/technology-map';
import { technologyMapRelationsFetcher } from '@/libs/technology-map-fetcher';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { MRT_Localization_JA } from 'material-react-table/locales/ja';
import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import useSWR from 'swr';

type TechnologyMapProductTableProps = {
  categoryId: number;
  qualification?: boolean;
  children: React.ReactNode;
};

type productsProps = {
  [key: number]: any;
};

export const TechnologyMapProductTable: React.FC<TechnologyMapProductTableProps> = (props) => {
  const { data: relationsData } = useSWR(
    canonicalPath(`/data/technology-map-relations.json`),
    technologyMapRelationsFetcher,
  );
  if (relationsData == undefined) {
    return <></>;
  }
  const relations = search(parseRelations(relationsData), props.categoryId, props.qualification, '');
  if (relations.length === 0) {
    return <p>現時点では該当する製品・サービスはありません。</p>;
  }

  return (
    <>
      <style>{`
      td > p {
        font-weight: normal;
        font-size: 14px;
        margin: 0px;
        padding: 0px;
      }`}</style>
      {props.children}
      <Wrapper relations={relations} />
    </>
  );
};

const Wrapper: React.FC<{ relations: any }> = (props) => {
  const [products, setProducts] = useState<productsProps>({});

  useEffect(() => {
    for (const relation of props.relations) {
      fetch(canonicalPath(`/data/technology-map-product-${relation.productId}.json`))
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const product = parseProduct(data);
          setProducts((prev: any) => {
            return { ...prev, [relation.productId]: product };
          });
        });
    }
  }, []);

  if (Object.keys(products).length >= parseRelations.length) {
    // sort by id
    const data: any[] = [];
    for (const productId of Object.keys(products).sort((a, b) => parseInt(a) - parseInt(b))) {
      data.push(products[productId as any]);
    }

    return <Content data={data} />;
  }

  return <></>;
};

const Content: React.FC<{ data: any[] }> = (props) => {
  const data = props.data.map((d: any) => {
    if (typeof d.title === 'string') {
      d.title = { title: d.title, id: d.id };
    }
    return d;
  });
  const columnsDefinitions = [
    {
      accessorKey: 'title',
      header: '製品・サービス名',
      Cell: renderTitleCell,
    },
  ];

  const columnVisibility: any = {};
  for (const c of data[0].keys) {
    if (c[c.length - 1] === '製品・サービス名') {
      continue;
    }
    const key = 'body.' + c.join('.');
    const header = c[c.length - 1];
    columnsDefinitions.push({
      accessorKey: key,
      header: header,
      Cell: renderCell,
    });
    columnVisibility[key] = false;
  }

  for (const c of data[0].summaryKeys) {
    const key = 'body.' + c.join('.');
    columnVisibility[key] = true;
  }

  // table rendering
  const columns = useMemo<MRT_ColumnDef<any>[]>(() => columnsDefinitions, []);

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      initialState={{
        density: 'compact',
        pagination: { pageIndex: 0, pageSize: 50 },
        columnVisibility: columnVisibility,
      }}
      localization={MRT_Localization_JA}
      muiTableBodyCellProps={{
        sx: {
          whiteSpace: 'normal',
          wordWrap: 'break-word',
        },
      }}
    />
  );
};

const renderTitleCell = ({ renderedCellValue, cell }: { renderedCellValue: any; cell: any }) => {
  return (
    <Anchor href={canonicalPath(`/technology-map/product/?id=${renderedCellValue.id}`)}>
      {renderedCellValue.title}
    </Anchor>
  );
};

const renderCell = ({ renderedCellValue, cell }: { renderedCellValue: any; cell: any }) => {
  if (typeof renderedCellValue === 'string') {
    return <ReactMarkdown remarkPlugins={[remarkGfm]}>{renderedCellValue}</ReactMarkdown>;
  }

  return <>{renderedCellValue}</>;
};
