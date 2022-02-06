import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {firestore} from "../database/firebase";
import Loader from "../components/Loader";

import ArticleList from "./ArticleList";

function ArticleListContainer() {
  const params = useParams();

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const filter = params.id
      ? firestore
          .collection("articles")
          .where("category", "==", params.id.toUpperCase())
          .orderBy("date")
      : firestore.collection("articles").orderBy("date", "desc");

    filter.get().then((results) => {
      const finalResult = [];

      results.forEach((result) => {
        const {id} = result;
        const finalData = {id, ...result.data()};

        finalResult.push(finalData);

        return finalResult;
      });
      setArticles(finalResult);
    });
  }, [params.id]);

  return (
    <div>{articles.length === 0 ? <Loader /> : <ArticleList articles={articles} />}</div>
  );
}

export default ArticleListContainer;
