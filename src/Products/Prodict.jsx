import { Card, Col, Row } from 'antd';
import Meta from 'antd/es/card/Meta';
import React, { useEffect, useState } from 'react'

const ProductItem = () => {
  const [myProducts, setMyProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const result = await fetch('https://fakestoreapi.com/products');
      const data = await result.json();
      // console.log(data);
      setMyProducts(data);
    };
    fetchProduct();
  }, [])



  return (
    myProducts.map(prod => (
      <Row gutter={[16, 16]}>
      <Col className="gutter-row" span={6}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={prod.image} />}
          >
            <Meta title={prod.title} description="www.instagram.com" />
            <h2>{prod.price}</h2>
          </Card>
        </Col>
      </Row>
    ))
  )
}

export default ProductItem
