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

  return (
    <>
      <style>{`
      p {
        font-weight: normal;
        font-size: 14px;
        margin: 0px;
        padding: 0px;
      }`}</style>
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
  const data = props.data;

  const columnsDefinitions = [
    {
      accessorKey: 'title',
      header: '製品・サービス名',
      Cell: renderCell,
    },
  ];

  const columnVisibility: any = {};
  for (const c of data[0].keys) {
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
        pagination: { pageIndex: 0, pageSize: 30 },
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

const renderCell = ({ renderedCellValue }: { renderedCellValue: any }) => {
  if (typeof renderedCellValue === 'string') {
    return <ReactMarkdown remarkPlugins={[remarkGfm]}>{renderedCellValue}</ReactMarkdown>;
  }

  return <>{renderedCellValue}</>;
};
