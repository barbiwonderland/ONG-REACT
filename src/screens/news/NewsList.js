import * as React from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card";

function NewsList() {
  const QUANTITY_OF_NEWS_TO_SHOW = 3;

  const news = React.useMemo(
    () =>
      mockedNews
        .slice(0, QUANTITY_OF_NEWS_TO_SHOW)
        .map(({ id, name, image }) => (
          <Link
            to={`/novedades/${id}`}
            key={id}
            className="text-decoration-none mx-auto"
          >
            <Card title={name} image={image} />
          </Link>
        )),
    [] //include mockedNews or equivalent array as dependency if it cames through props
  );

  return (
    <section className="d-flex flex-column flex-sm-row flex-wrap justify-content-evenly">
      {news}
    </section>
  );
}

export default NewsList;

const mockedNews = [
  {
    id: 57,
    name: "Apoyo Escolar Nivel Secundaria",
    created_at: "2021-05-20T00:25:05.000000Z",
    image: "http://ongapi.alkemy.org/storage/MiAAf8uQWI.jpeg",
  },
  {
    id: 58,
    name: "Tutorias",
    created_at: "2021-05-20T00:31:30.000000Z",
    image: "http://ongapi.alkemy.org/storage/uAsdMJJhoS.jpeg",
  },
  {
    id: 61,
    name: "Viernes deportivos",
    created_at: "2021-05-20T20:46:35.000000Z",
    image: "http://ongapi.alkemy.org/storage/nQcLI8YlvR.jpeg",
  },
  {
    id: 62,
    name: "Entrega de prótesis",
    created_at: "2021-05-30T22:37:57.000000Z",
    image: "http://ongapi.alkemy.org/storage/3Eixnc43Pn.jpeg",
  },
  {
    id: 105,
    name: "Ola de calor: más de 400 muertos en Canadá y 80 en EE.UU. en medio de temperaturas récord",
    created_at: "2021-07-03T15:22:53.000000Z",
    image: "http://ongapi.alkemy.org/storage/yfi2k6scr9.jpeg",
  },
];
