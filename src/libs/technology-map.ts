export type TechnologyMapDataProps = string[][];
export type TechnologyMapCategoriesProps = string[][];
export type TechnologyMapProductProps = string[][];
export type TechnologyMapRelationsProps = string[][];
export type TechnologyMapNewsProps = string[][];
export type TechnologyMapOffersProps = string[][];

type RelationProps = {
  categoryId: number;
  productId: number;
  mainCategory: number;
  productName: string;
  qualification: boolean;
};

type OffersProps = {
  [key: number]: OfferProps;
};

type OfferProps = {
  id: number;
  closed: boolean;
  title: string;
  overview: string;
  offer: string;
  qualifiedDescription: string;
  notQualifiedDescription: string;
};

type RelationsProps = RelationProps[];

type ProductSummaryKeyProps = [number, string, number, string];

type ProductProps = {
  id: number;
  title: string;
  qualification: boolean;
  mainCategory: number;
  body: any[];
  keys: ProductSummaryKeyProps[];
  summaryKeys: ProductSummaryKeyProps[];
};

export type CategoryProps = {
  id: number;
  description: string;
  type: string;
  link: boolean;
  shortDescription: string;
};
export type CategoriesProps = {
  // keys by id
  [key: number]: CategoryProps;
};
type CategoriesByDescriptionProps = {
  // keys by description
  [typeKey: string]: {
    [descriptionKey: string]: CategoryProps;
  };
};

type ElementProps = {
  value: string;
  colspan: number;
  rowspan: number;
  type?: string;
  level?: number;
  categoryId?: number;
  categoryDescription?: string;
  link?: boolean;
};
type ElementsProps = ElementProps[][];
type DataProps = {
  xHeaderLength: number;
  yHeaderLength: number;
  xHeader: ElementsProps;
  yHeader: ElementsProps;
  xDataLength: number;
  yDataLength: number;
  body: ElementsProps;
};

const MERGE_PREFIX = 'merged:';
const MERGE_PREFIX_LEN = MERGE_PREFIX.length;

export const search = (
  data: RelationsProps,
  categoryId: number | undefined,
  qualification: boolean | undefined,
  freetext: string,
): RelationsProps => {
  const tmp: { [key: number]: RelationProps } = {};

  // filter by categoryId
  if (categoryId !== undefined) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].categoryId === categoryId) {
        tmp[data[i].productId] = data[i];
      }
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      tmp[data[i].productId] = data[i];
    }
  }

  // filter by qualification
  if (qualification !== undefined) {
    for (const key in tmp) {
      if (tmp[key].qualification !== qualification) {
        delete tmp[key];
      }
    }
  }

  // filter by freetext
  const result: RelationsProps = [];
  if (freetext !== '') {
    const freetextLower = freetext.toLowerCase();
    for (const key in tmp) {
      if (tmp[key].productName.toLowerCase().includes(freetextLower) == false) {
        delete tmp[key];
      }
    }
  }

  for (const key in tmp) {
    result.push(tmp[key]);
  }

  return result;
};

export const parseOffers = (data: TechnologyMapOffersProps): OffersProps => {
  const offers: OffersProps = {};

  // i = 1: skip header
  for (let i = 1; i < data.length; i++) {
    const offer: OfferProps = {
      id: parseInt(data[i][0]),
      title: data[i][1],
      closed: data[i][2] != '' ? true : false,
      overview: data[i][3],
      offer: data[i][4],
      qualifiedDescription: data[i][5],
      notQualifiedDescription: data[i][6],
    };

    offers[offer.id] = offer;
  }

  return offers;
};

export const parseRelations = (data: TechnologyMapRelationsProps): RelationsProps => {
  const relations: RelationsProps = [];

  // i = 1: skip header
  for (let i = 1; i < data.length; i++) {
    const relation: RelationProps = {
      categoryId: parseInt(data[i][0]),
      productId: parseInt(data[i][1]),
      productName: data[i][2],
      qualification: data[i][3] == '1' ? true : false,
      mainCategory: parseInt(data[i][4]),
    };

    relations.push(relation);
  }

  return relations;
};

// xxx: support 3 or more levels?
export const parseProduct = (data: TechnologyMapProductProps): ProductProps => {
  const body = data[data.length - 1];
  const product: ProductProps = {
    id: 0,
    title: '',
    qualification: false,
    mainCategory: 0,
    body: [],
    keys: [],
    summaryKeys: [],
  };

  let key = '';
  let n = 0;
  let currentElement: any = {};
  for (let i = 0; i < data[0].length; i++) {
    if (data[0][i] !== '') {
      key = data[0][i];
      if (data[1][i] === '') {
        // just 1 level of header, and specific case
        if (key === 'id') {
          product.id = parseInt(body[i]);
        } else if (key === 'qualification') {
          product.qualification = body[i] != '' ? true : false;
        } else if (key === 'main-category') {
          product.mainCategory = parseInt(body[i]);
        } else if (key === 'title') {
          product.title = body[i];
        }
        continue;
      }

      currentElement = {};
      currentElement[key] = [];
      product.body.push(currentElement);
      n = product.body.length - 1;
    }
    if (data[1][i] === '') {
      continue;
    }

    const tmpObj: any = {};
    let tmpKey = data[1][i];
    if (tmpKey.match(/^\*/)) {
      tmpKey = tmpKey.slice(1);
      product.summaryKeys.push([n, key, currentElement[key].length, tmpKey]);
    }
    product.keys.push([n, key, currentElement[key].length, tmpKey]);
    tmpObj[tmpKey] = body[i];
    currentElement[key].push(tmpObj);
  }

  return product;
};

export const parseCategories = (
  data: TechnologyMapCategoriesProps,
): { categories: CategoriesProps; categoriesByDescription: CategoriesByDescriptionProps } => {
  const categories: CategoriesProps = {};
  const categoriesByDescription: CategoriesByDescriptionProps = {};

  // i = 1: skip header
  for (let i = 1; i < data.length; i++) {
    const category: CategoryProps = {
      id: parseInt(data[i][0]),
      description: data[i][1],
      type: data[i][2],
      link: data[i][3] !== '' ? true : false,
      shortDescription: data[i][4],
    };

    categories[category.id] = category;
    if (categoriesByDescription[category.type] === undefined) {
      categoriesByDescription[category.type] = {};
    }
    categoriesByDescription[category.type][category.description] = category;
  }

  return { categories, categoriesByDescription };
};

// テクノロジーマップのcsvデータをテーブルデータに変換する
export const parseData = (
  data: TechnologyMapDataProps,
  categoriesByDescription: CategoriesByDescriptionProps,
  id: string,
): DataProps | null => {
  if (data.length <= 0) {
    return null;
  }

  // determine x, y header lengths
  const table = parseStructure(data);

  table.xHeader = parseXHeader(data, table);
  table.yHeader = parseYHeader(data, table);
  table.body = parseBody(data, table);

  // set category id for each element
  table.xHeader = applyCategoryId(table.xHeader, categoriesByDescription, 'x-header');
  table.yHeader = applyCategoryId(table.yHeader, categoriesByDescription, `y-header-${id}`);
  table.body = applyCategoryId(table.body, categoriesByDescription, 'product');

  return table;
};

const applyCategoryId = (
  elements: ElementsProps,
  categoriesByDescription: CategoriesByDescriptionProps,
  typeKey: string,
): ElementsProps => {
  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < elements[i].length; j++) {
      if (elements[i][j].value !== '') {
        if (
          categoriesByDescription[typeKey] === undefined ||
          categoriesByDescription[typeKey][elements[i][j].value] === undefined
        ) {
          console.log(`Category ${elements[i][j].value} not found`);
          continue;
        }
        elements[i][j].categoryId = categoriesByDescription[typeKey][elements[i][j].value].id;
        elements[i][j].categoryDescription = categoriesByDescription[typeKey][elements[i][j].value].shortDescription;
        elements[i][j].link = categoriesByDescription[typeKey][elements[i][j].value].link;
      }
    }
  }

  return elements;
};

const isElementMerged = (dataValue: string, elementValue?: string): boolean => {
  if (elementValue !== undefined) {
    return dataValue === `${MERGE_PREFIX}${elementValue}`;
  }

  return dataValue.slice(0, MERGE_PREFIX_LEN) === MERGE_PREFIX;
};

const parseBody = (data: TechnologyMapDataProps, table: DataProps) => {
  const parsedData: ElementsProps = [];

  for (let i = table.xHeaderLength; i < data.length; i++) {
    const row: ElementProps[] = [];
    let element: ElementProps | null = null;

    for (let j = table.yHeaderLength; j < data[0].length; j++) {
      if (isElementMerged(data[i][j])) {
        continue;
      } else {
        element = { value: data[i][j], colspan: 1, rowspan: 1, type: 'data' };
        if (element.value === '-') {
          element.value = '';
        }
        if (element.value !== '') {
          element = mergeBodyElements(element, data, j, data[0].length, i, data.length);
        }
        row.push(element);
      }
    }

    parsedData.push(row);
  }

  return parsedData;
};

const mergeBodyElements = (
  element: ElementProps,
  data: TechnologyMapDataProps,
  x: number,
  xLimit: number,
  y: number,
  yLimit: number,
): ElementProps => {
  for (let i = y + 1; i < yLimit; i++) {
    if (data[i][x] !== element.value && isElementMerged(data[i][x], element.value) === false) {
      // no more element to be merged
      break;
    }

    element.rowspan++;
    data[i][x] = `${MERGE_PREFIX}${element.value}`;
  }

  return element;
};

const parseXHeader = (data: TechnologyMapDataProps, table: DataProps) => {
  const xHeader: ElementsProps = [];

  for (let i = 0; i < table.xHeaderLength; i++) {
    const row: ElementProps[] = [];
    let element: ElementProps | null = null;

    for (let j = table.yHeaderLength; j < data[0].length; j++) {
      if (isElementMerged(data[i][j])) {
        continue;
      } else {
        element = {
          value: data[i][j],
          colspan: 1,
          rowspan: 1,
          type: 'xheader',
          level: i,
        };
        if (element.value === '-') {
          element.value = '';
        }
        if (element.value !== '') {
          element = mergeXElements(element, data, j, data[0].length, i, table.xHeaderLength);
          row.push(element);
        }
      }
    }

    xHeader.push(row);
  }

  return xHeader;
};

const mergeXElements = (
  element: ElementProps,
  data: TechnologyMapDataProps,
  x: number,
  xLimit: number,
  y: number,
  yLimit: number,
): ElementProps => {
  for (let i = x + 1; i < xLimit; i++) {
    if (data[y][i] !== '' && isElementMerged(data[y][i], element.value) === false) {
      break;
    }
    element.colspan++;
    data[y][i] = `${MERGE_PREFIX}${element.value}`;
  }

  loopY: for (let i = y + 1; i < yLimit; i++) {
    if (data[i][x] !== '-' && isElementMerged(data[i][x], element.value) === false) {
      break;
    }

    for (let j = x + 1; j < x + element.colspan; j++) {
      if (data[i][j] !== '' && isElementMerged(data[i][j], element.value) === false) {
        break loopY;
      }
    }

    element.rowspan++;
    for (let j = x; j < x + element.colspan; j++) {
      data[i][j] = `${MERGE_PREFIX}${element.value}`;
    }
  }

  return element;
};

const parseYHeader = (data: TechnologyMapDataProps, table: DataProps) => {
  const yHeader: ElementsProps = [];

  for (let i = table.xHeaderLength; i < data.length; i++) {
    const row: ElementProps[] = [];
    let element: ElementProps | null = null;

    for (let j = 0; j < table.yHeaderLength; j++) {
      if (isElementMerged(data[i][j])) {
        continue;
      } else {
        element = {
          value: data[i][j],
          colspan: 1,
          rowspan: 1,
          type: 'yheader',
          level: j,
        };
        if (element.value === '-') {
          element.value = '';
        }
        if (element.value !== '') {
          element = mergeYElements(element, data, j, table.yHeaderLength, i, data.length);
        }
        row.push(element);
      }
    }

    yHeader.push(row);
  }

  return yHeader;
};

const mergeYElements = (
  element: ElementProps,
  data: TechnologyMapDataProps,
  x: number,
  xLimit: number,
  y: number,
  yLimit: number,
): ElementProps => {
  for (let i = y + 1; i < yLimit; i++) {
    if (data[i][x] !== '' && isElementMerged(data[i][x], element.value) === false) {
      break;
    }
    element.rowspan++;
    data[i][x] = `${MERGE_PREFIX}${element.value}`;
  }

  loopX: for (let i = x + 1; i < xLimit; i++) {
    if (data[y][i] !== '-' && isElementMerged(data[y][i], element.value) === false) {
      break;
    }

    for (let j = y + 1; j < y + element.rowspan; j++) {
      if (data[j][i] !== '' && isElementMerged(data[j][i], element.value) === false) {
        break loopX;
      }
    }

    element.colspan++;
    for (let j = y; j < y + element.rowspan; j++) {
      data[j][i] = `${MERGE_PREFIX}${element.value}`;
    }
  }

  return element;
};

const parseStructure = (data: TechnologyMapDataProps): DataProps => {
  let xHeaderLength = 0;
  let yHeaderLength = 0;
  let xDataLength = 0;
  let yDataLength = 0;

  for (let i = 0; i < data[0].length; i++) {
    if (data[0][i] === '') {
      yHeaderLength++;
    } else {
      break;
    }
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === '') {
      xHeaderLength++;
    } else {
      break;
    }
  }

  xDataLength = data[0].length - yHeaderLength;
  yDataLength = data.length - xHeaderLength;

  return {
    xHeaderLength: xHeaderLength,
    yHeaderLength: yHeaderLength,
    xHeader: [],
    yHeader: [],
    xDataLength: xDataLength,
    yDataLength: yDataLength,
    body: [],
  };
};
