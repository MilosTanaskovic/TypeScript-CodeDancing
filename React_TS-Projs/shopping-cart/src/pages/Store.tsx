import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { StoreItem } from '../components';

import storeItems from '../data/items.json';

type StoreProps = {

}

const Store: React.FC<StoreProps> = ({}) => {
    return (
        <>
        <h1>Apple Store</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {storeItems.map((item) => (
                <Col key={item.id}>
                    <StoreItem {...item}/>
                </Col>
            ))}
        </Row>
        </>
    )
}

export default Store
