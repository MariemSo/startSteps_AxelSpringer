function addArticle(article: IArticle) {
  const action: ArticleAction = {
    type: "ADD_ARTICLE",
    article,
  };
  return action;
}

function removeArticle(article: IArticle) {
  const action: ArticleAction = {
    type: "REMOVE_ARTICLE",
    article,
  };
  return action;
}

export { removeArticle, addArticle };
