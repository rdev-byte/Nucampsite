import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { COMMENTS } from '../../app/shared/COMMENTS';
import { baseUrl } from '../../app/shared/baseUrl';

const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        const response = await fetch(`${baseUrl}/comments`);
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const comments = await response.json();
        return comments;
    }
);

const initialState = {
    commentsArray: COMMENTS,
    isLoading: false,
    error: null
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            console.log('addComment action.payload:', action.payload);
            console.log('addComment state.commentsArray:', state.commentsArray);
            const newComment = {
                id: state.commentsArray.length + 1,
                ...action.payload
            };
            state.commentsArray.push(newComment);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.commentsArray = action.payload;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export { fetchComments };

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};
