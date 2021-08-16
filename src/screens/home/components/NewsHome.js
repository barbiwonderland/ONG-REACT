import React, { useEffect, useState, useMemo } from "react";
import { getNews } from "../../../services/newsService";
import { LoaderSpinner } from "../../../components/LoaderSpinner";
import Card from "../../../components/Card";

export const NewsHome = () => {
  const [{ news, status }, setNews] = useState({ news: [], status: "loading" });

  // Integration API
  const getNewsNotices = async () => {
    try {
      const resultado = await getNews();
      const { data } = resultado;
      setNews({ news: data.data, status: "complete" });
    } catch (error) {
      setNews((state) => ({ ...state, status: "failed" }));
    }
  };

  useEffect(() => {
    getNewsNotices();
  }, []);

  const memoNews = useMemo(
    () =>
      news.map((newNotice) => {
        console.log(newNotice);
        return (
          // fix resposive
          <div className="col-sm-12 col-md-6">
          <Card
            key={newNotice.id}
            title={newNotice.name}
            image={newNotice.image}
          />

          </div>
        );
      }),
    [news]
  );

  const contentToRender = {
    loading: (
      <div className="d-flex justify-content-center h-100 align-items-center">
        <LoaderSpinner />
      </div>
    ),
    complete: memoNews,
    failed: (
      <p className="alert alert-danger text-center">
        Upsss... No se pudo cargar el contenido.
      </p>
    ),
  };

  return (
    <div className="container">
      <div className="row mt-5">{contentToRender[status]}</div>
    </div>
  );
};
