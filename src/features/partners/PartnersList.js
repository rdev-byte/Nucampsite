import React from 'react';
import { Col, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import Partner from './Partner';
import { selectAllPartners } from '../partners/partnersSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const PartnersList = () => {
  const partners = useSelector(selectAllPartners);
  const isLoading = useSelector((state) => state.partners.isLoading);
  const errMsg = useSelector((state) => state.partners.errMsg);

  if (isLoading) {
    return <Loading />;
  }

  if (errMsg) {
    return <Error errMsg={errMsg} />;
  }

  return (
    <Col className='mt-4'>
      <Row>
        {partners.map((partner) => (
          <div className='d-flex mb-5' key={partner.id}>
            <Partner partner={partner} />
          </div>
        ))}
      </Row>
    </Col>
  );
};

export default PartnersList;
