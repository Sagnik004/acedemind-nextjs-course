import path from 'path';
import fs from 'fs/promises';

import { Fragment } from 'react';

const ProductDetailPage = (props) => {
  const { productInfo } = props;

  if (!productInfo) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <h1>{productInfo.title}</h1>
      <p>{productInfo.description}</p>
    </Fragment>
  );
};

const getData = async () => {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
};

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const data = await getData();

  const selectedProduct = data.products.find(
    (product) => product.id === productId
  );
  if (!selectedProduct || selectedProduct.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      productInfo: selectedProduct,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const pathWithParams = ids.map((id) => ({
    params: {
      pid: id,
    },
  }));

  return {
    paths: pathWithParams,
    fallback: true, // false, 'blocking'
  };
}

export default ProductDetailPage;
