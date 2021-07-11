import { post } from 'request';
import {
    GET_DESSERTS,
    GET_DESSERT,
    DELETE_DESSERT,
    DESSERT_ERROR
} from '../actions/types';

const initialState = { 
    desserts: [],
    dessert: null,
    loading:true,
    error:{}
 }

 export default function (state=initialState, action){
     const {type, payload} = action;

     switch(type){
         case GET_DESSERTS:
            return {
                ...state,
                desserts: payload,
                loading:false
            }
         case GET_DESSERT:
            return {
                ...state,
                dessert: payload,
                loading:false
            }
         case DELETE_DESSERT:
            return{
                ...state,
                desserts: state.desserts.filter(dessert=>dessert._id !== payload),
                loading:false
            }
         case DESSERT_ERROR:
            return {
                ...state,
                error: payload,
                loading:false
            }
        default:
            return state;
     }
 }