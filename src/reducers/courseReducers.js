import * as actionTypes from '../constants/actionsTypes';


export default function courseReducer(state= [], action) {
  switch(action.type) {
    case actionTypes.CREATE_COURSE: 
      return [...state, 
        Object.assign({}, action.course)
      ];
    default: 
      return state;    
  }
}


//or
// return [ 
//         Object.assign({}, state, action.course)
// ];


