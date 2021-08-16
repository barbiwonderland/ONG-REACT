import React, { useMemo } from "react";
import Card from "../Card";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
const activities = [
  {
    id: 1,
    name: "Apoyo Escolar para el nivel Primario",
    image:
      "https://conlagentenoticias.com/wp-content/uploads/2019/12/73117777_1364743323681977_1730252979925155840_o.jpg",
    createdAt: "9/7/2020",
  },
  {
    id: 2,
    name: "Apoyo Escolar Nivel Secundaria",
    image:
      "https://media.puntal.com.ar/p/ea7e8418748480c3787ab1ab9a747287/adjuntos/279/imagenes/001/206/0001206443/apoyo-escolarjpgjpg.jpg",
    createdAt: "12/18/2020",
  },
  {
    id: 3,
    name: "Tutorias",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqdWy6lt4tf98_04LBHHKHVzEcyTvDOpQvRg&usqp=CAU",
    createdAt: "1/29/2021",
  },

  {
    id: 5,
    name: "Paseos recreativos y educativos",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zrj6sShgRO2uW2eBw1l_XCC6eh8oN4oLhQ&usqp=CAU",
    createdAt: "8/7/2020",
  },
];

function ActivitiesList() {
  const history = useHistory();
  const ObtenerId = (id) => {
    console.log(`Id obtenido: ${id}`);
    history.push(`/actividades/${id}`);
  };
  const activity = useMemo(() => {
    return (
      activities &&
      activities.map((x) => (
        <div className="col-md-6" key={x.id}>
          <div
            onClick={() => {
              ObtenerId(x.id);
            }}
          >
            <Card title={x.name} description={x.createdAt} image={x.image} />
          </div>
        </div>
      ))
    );
  });
  
  const BorderLine = styled.h1`
  font-family: "Titillium Web", sans-serif !important;
  font-size: 2.2rem;
  padding-left: 8px;
  padding-right: 10px;
  display: inline-block;
  border-left: 8px #9ac9fb solid;
  color: black;
  text-transform: uppercase;
  &:hover {
    color: white;
    background-color: rgb(26, 23, 23);
  }
}
  `;
  return (
    <React.Fragment>
      <div className="container">
        <div className="text-center mt-2">
          {/* <BorderLine>actividades</BorderLine> */}
        </div>
        <div className="row">
          {activity}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ActivitiesList;
