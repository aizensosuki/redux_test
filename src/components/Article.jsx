import React from "react";

const Article = ({ article , deleteArticle }) => {


  return (
    <div className="article">
      <h1>{article.title}</h1>
      <p>
        {article.body}
        <button onClick={ () => deleteArticle(article.id)}>supprimer</button>
        <button>edit</button>
      </p>
    </div>
  );
}

export default Article;
