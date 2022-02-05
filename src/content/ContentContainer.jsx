import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {firestore} from "../database/firebase";
import Loader from "../components/Loader";

import Content from "./Content";

function ContentContainer() {
  const params = useParams();

  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    firestore
      .collection("articles")
      .doc(params.id)
      .get()
      .then((resultado) => {
        const {id} = resultado;
        const dataFinal = {id, ...resultado.data()};

        setContent(dataFinal);
      })
      .finally(() => setLoading(false));
  }, [params.id]);

  return <div>{loading ? <Loader /> : <Content content={content} />}</div>;
}

export default ContentContainer;
