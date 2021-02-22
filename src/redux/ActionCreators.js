import * as ActionTypes from "./ActionTypes";
import api from "../redux/api"
import { baseUrl } from '../component/shared/baseUrl';

export const addComment = (dishId, rating, author, comment)=> ({
   type: ActionTypes.ADD_COMMENT,
   payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
   }
})

export const postFeedback = (postfeedback) => (dispatch) => {
  api.postFeedback().fetchAll()
   return fetch(baseUrl +'postfeedback', {
    type: ActionTypes.ACTION_TYPES.FETCH_ALL,
       method: "POST",
       body: JSON.stringify(postfeedback),
       headers: {
         "Content-Type": "application/json"
       },
       credentials: "same-origin"
   })
   
   .then(response => {
       if (response.ok) {
         return response;
       } else {
         var error = new Error('Error ' + response.status + ': ' + response.statusText);
         error.response = response;
         throw error;
       }
     },
     error => {
           throw error;
     })
   .then(response => response.json())
   .then(response => { console.log('Feedback', response); alert('Thank you for your feedback!\n'+JSON.stringify(response)); })
   .catch(error =>  { console.log('Feedback', error.message); });
};
