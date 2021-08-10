// Step 4



import React, { useReducer } from "react";
import commentReducer from './comment-reducer';
import CommentContext from './comment-context'


const CommentState = (props) => {
  const intialState = {
    comments: [], // {id: '123', text: 'Some text', complete: false}
  };

  const [state, dispatch] = useReducer(commentReducer, intialState);

  // Add todo
  const addComment = (comment) => {
    dispatch({
      type: 'ADD_COMMENT',
      payload: comment,
    });
  };

  // Toggle a todo



  return (
    <CommentContext.Provider
      value={{
        comments: state.comments,
        addComment,
      }}
    >
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentState;
