import * as React from "react";
import { editNews, deleteNews, getNews, createNews} from '../../services/newsService';
import { HeaderBackOffice } from "../../components/HeaderBackOffice";
import NewsList from "../../components/NewsList";

function News() {  

  return (
    <>
      <HeaderBackOffice createNews={createNews} />
      <NewsList editNews={editNews} deleteNews={deleteNews} getNews={getNews}/>
    </>
  );
}

export default News;


