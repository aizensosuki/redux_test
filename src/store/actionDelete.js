import * as actionTypes from "./actionTypes";


export const deleteArticle = (articleId) => {
  return {
    type: actionTypes.DELETE_ARTICLE,
    articleId: articleId,
  };
};
