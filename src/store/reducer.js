/* eslint-disable default-case */
import * as actionTypes from "./actionTypes";

const initialState = {
  articles: [
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitaepharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitaepharetra" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle = {
        id: Math.floor(Math.random() * 100) + 1,
        title: action.article.title,
        body: action.article.body,
      };
      return {
        ...state,
        articles: [...state.articles, newArticle],
      };
    case actionTypes.DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(
          (article) => article.id !== action.articleId
        ),
      };
    case actionTypes.UPDATE_ARTICLE:
      return {
        ...state,
        articles: state.articles.map((article) =>
          article.id === action.article.id
            ? { ...article, ...action.article }
            : article
        ),
      };
    default:
      return state;
  }
};

export default reducer;
