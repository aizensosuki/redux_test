import React from "react";
import { connect } from "react-redux";
import Article from "../components/Article";
import AddArticle from "../components/AddArticle";
import { addArticle } from "../store/actionCreators";
import { deleteArticle } from "../store/actionDelete";
import { editArticle } from "../store/actionEdit";

const Articles = ({ articles, saveArticle, removeArticle }) => {
  return (
    <div>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article) => (
        <Article
          key={article.id}
          article={article}
          deleteArticle={removeArticle} // Pass a function reference
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveArticle: (article) => dispatch(addArticle(article)),
    removeArticle: (articleId) => dispatch(deleteArticle(articleId)),
    editionArticle: (articleId) => dispatch(editArticle(articleId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
