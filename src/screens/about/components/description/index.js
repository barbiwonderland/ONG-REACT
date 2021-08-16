import React, { useState, useEffect, useMemo } from "react";
import { getAboutUs } from "../../../../services/aboutService";
import "./description.css";
import AlertMessage from "../../../../components/AlertMessage";

function Description({ text }) {
  const [aboutUs, setAboutUs] = useState("");
  const [errorMsg, setErrorMsg] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchAboutUs = async () => {
    try {
      const response = await getAboutUs();
      const { data } = response;
      const organizationData = data.data;
      const aboutUsData = organizationData[0].long_description;
      setAboutUs(aboutUsData);
    } catch (error) {
      console.log(error);
      const errorAboutUs = "Upsss... No se pudo cargar el contenido.";
      setErrorMsg(errorAboutUs);
    }
  };

  useEffect(() => {
    fetchAboutUs();
  }, []);

  const memoAboutUs = useMemo(
    () => (
      <section className="text-center lh-base fs-5 p-5 shadow-sm rounded-2 description">
        <div dangerouslySetInnerHTML={{ __html: `${aboutUs}` }}></div>
      </section>
    ),
    [aboutUs]
  );

  const showOrError = !errorMsg ? (
    <div>{memoAboutUs}</div>
  ) : (
    <p className="alert alert-danger text-center">{errorMsg}</p>
  );

  return <div>{showOrError}</div>;
}

export default Description;
