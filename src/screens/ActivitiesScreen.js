import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { CardActivityScreen } from "./CardActivityScreen";
import imgTest from "../assets/imgTest.jpg";

export const ActivitiesScreen = () => {
  const activities = [
    {
      idActivity: 1,
      img: imgTest,
      name: "Ayuda Comunitaria",
      createdAt: "Mayo",
    },
    {
      idActivity: 2,
      img: imgTest,
      name: "Comedor Infantil",
      createdAt: "Abril",
    },
    { idActivity: 3, img: imgTest, name: "Apoyo Escolar", createdAt: "Julio" },
    { idActivity: 4, img: imgTest, name: "Apoyo Escolar", createdAt: "Julio" },
  ];

  const memoActivity = useMemo(
    () =>
      activities.map((activity) => {
        return (
          <CardActivityScreen key={activity.idActivity} activity={activity} />
        );
      }),
    [activities]
  );

  return (
    <div className="container-md mt-3 mb-3 p-3 bg-activities">
      <div className="row d-flex align-items-center mb-2 text-center">
        <div className="col">
          <h3>Actividades:</h3>
        </div>
        <div className="col text-center">
          <Link className="btn btn-success" to="/backoffice/activities/create">
            Agregar Actividad
          </Link>
        </div>
      </div>
      {memoActivity}
    </div>
  );
};
