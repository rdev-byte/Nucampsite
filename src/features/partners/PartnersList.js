import React from 'react';
import { Col } from 'reactstrap';
import Partner from './Partner';
import { selectAllParteners } from '../partners/partnersSlice';

const PartnersList = () => {
    const partners = selectAllParteners();

    return (
        <Col className='mt-4'>
            {partners.map((partner) => {
                return (
                    <div className='d-flex mb-5' key={partner.id}>
                        <Partner partner={partner} />
                    </div>
                );
            })}
        </Col>
    );
};

export default PartnersList;
