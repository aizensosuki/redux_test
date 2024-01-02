import * as actionTypes from "./actionTypes";

export const editArticle = (articleId) => {
  return {
    type: actionTypes.UPDATE_ARTICLE,
    articleId: articleId,
  };
};
