import { combineReducers } from '@reduxjs/toolkit';
import starWarsReducer from './slice';

const createRootReducer = () => combineReducers({ starWars: starWarsReducer });

export default createRootReducer;
