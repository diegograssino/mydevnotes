import Article from "./Article";

function ArticleList({articles}) {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <Article article={article} />
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
