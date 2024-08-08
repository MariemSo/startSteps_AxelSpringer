const initialState: ArticleState = {
  articles: [
    {
      id: 1,
      title: "Post 1",
      body: "Test Text 1",
    },
    {
      id: 2,
      title: "Post 2",
      body: "Test Text 2",
    },
  ],
};

const reducer = (
  state: ArticleState = initialState,
  action: ArticleAction //the data that we pass to dispatch function
): ArticleState => {
  switch (
    action.type //if(action.type === "ADD_ARTICLE")
  ) {
    case "ADD_ARTICLE":
      const newArticle: IArticle = {
        id: Math.random(),
        title: action.article.title,
        body: action.article.body,
      };
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      }; //returning the new updated state which contains the new added article
    case "REMOVE_ARTICLE":
      const updatedArticles: IArticle[] = state.articles.filter(
        (article) => article.id !== action.article.id
      );
      return {
        ...state,
        articles: updatedArticles,
      }; //returning the new updated state which contains and the article is removed
    case "UPDATE_ARTICLE":
      console.log(action);
      const updatedArticle = state.articles.map((article) => {
        if (article.id === action.article.id) {
          return action.article; // the new updated data that we send throw dispath
        }
        return article;
      });
      console.log(updatedArticle);
      return {
        ...state,
        articles: updatedArticle,
      };
  }
  return state;
};

export default reducer;
