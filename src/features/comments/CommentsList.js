import { Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import Comment from '../../app/shared/oldData/Comment';
import CommentForm from './CommentForm';
import { selectCommentsByCampsiteId } from './commentsSlice';

const CommentsList = ({ campsiteId }) => {
    const comments = useSelector((state) => selectCommentsByCampsiteId(state, campsiteId));
    const isLoading = useSelector((state) => state.comments.isLoading);
    const errMsg = useSelector((state) => state.comments.error);

    if (isLoading) {
        return (
            <Col md='5' className='m-1'>
                <h4>Loading...</h4>
            </Col>
        );
    }

    if (errMsg) {
        return (
            <Col md='5' className='m-1'>
                <h4>Error: {errMsg}</h4>
            </Col>
        );
    }

    if (comments && Array.isArray(comments) && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                ))}
                <CommentForm campsiteId={campsiteId} />
            </Col>
        );
    } else {
        return (
            <Col md='5' className='m-1'>
                There are no comments for this campsite yet.
            </Col>
        );
    }
};

export default CommentsList;
