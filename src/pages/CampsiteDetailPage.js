import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/comments/CommentsList';

const CampsiteDetailPage = () => {
  const { campsiteId } = useParams();
  const campsite = selectCampsiteById(campsiteId);

  return (
    <Container>
      <SubHeader current={campsite.name} detail={true} />
      <Row>
        <Col md='5' className='m-1'>
          <CampsiteDetail campsite={campsite} />
        </Col>
        <Col md='5' className='m-1'>
          <CommentsList campsiteId={campsiteId} />
        </Col>
      </Row>
    </Container>
  );
};

export default CampsiteDetailPage;