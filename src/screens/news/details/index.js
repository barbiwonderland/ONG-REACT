import React from "react";
import { useParams } from "react-router-dom";
import { LoaderSpinner } from "../../../components/LoaderSpinner";
import { TitlesComponent } from "../../../components/TitlesComponent";
// import { getSingleNew } from "../../../services/newsService";
import NewsWebContent from "../../../components/NewsWebContent";

function Details() {
  const [{ newsDetails, status }, setNewsDetails] = React.useState({
    newsDetails: null,
    status: "loading",
  });

  const { id } = useParams();

  const getNewsDetails = async (id) => {
    try {
      //const { data } = await getSingleNew(id); //the method is being created in ticket #119
      const data = {data:[]};
      setNewsDetails({ newsDetails: data.data, status: "complete" });
    } catch (error) {
      setNewsDetails((state) => ({ ...state, status: "failed" }));
    }
  };

  React.useEffect(() => {
    getNewsDetails(id);
  }, [id]);

  const contentToRender = {
    loading: (
      <div className="d-flex justify-content-center h-100 align-items-center">
        <LoaderSpinner />
      </div>
    ),
    complete: (
      <>
        <TitlesComponent title={newsDetails.name} img={newsDetails.image} />
        <NewsWebContent data={newsDetails} />
        {/* the component is being created in ticket #117 */}
      </>
    ),
    failed: (
      <p className="alert alert-danger text-center">
        Upsss... No se pudo cargar el contenido.
      </p>
    ),
  };

  return <section className="container">{contentToRender[status]}</section>;
}

export default Details;
