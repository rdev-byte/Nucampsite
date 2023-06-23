import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchPromotions = createAsyncThunk(
  'promotions/fetchPromotions',
  async () => {
    try {
      const response = await fetch(baseUrl + 'promotions');
      if (!response.ok) {
        throw new Error('Unable to fetch, status: ' + response.status);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching promotions: ' + error.message);
    }
  }
);

const initialState = {
  promotionsArray: [],
  isLoading: true,
  errMsg: ''
};

const promotionsSlice = createSlice({
  name: 'promotions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPromotions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPromotions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errMsg = '';
        state.promotionsArray = mapImageURL(action.payload);
      })
      .addCase(fetchPromotions.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.error ? action.error.message : 'Fetch failed';
      });
  }
});

export const promotionsReducer = promotionsSlice.reducer;

export const selectFeaturedPromotion = (state) => {
  return {
    featuredItem: state.promotions.promotionsArray.find(
      (promotion) => promotion.featured
    ),
    isLoading: state.promotions.isLoading,
    errMsg: state.promotions.errMsg
  };
};

export default promotionsSlice;
