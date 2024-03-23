import React from 'react';
import {BASE_URL, END_POINTS} from '../utils/Constants';
import axios from 'axios';
const {PRODUCTS} = END_POINTS;
export const retrievePosts = async () => {
  const response = await axios.get(`${BASE_URL}/${PRODUCTS}`);
  return response.data?.products;
};
