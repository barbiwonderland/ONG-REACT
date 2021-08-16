import React, { useState, useEffect } from 'react';
import { useMemo } from 'react';
import Card from '../../components/Card' 
import { listActivities } from '../../services/activitiesService';

export const ActivitiesList = (props) => {

  const [ activitie, setActivitie ] = useState([]);
  const [ errorNews, seterrorNews ] = useState(null);

  // Integration API
  const getNewsNotices = async () => {
    try {
      const response = await listActivities();
      const { data } = response;
      const activitie = data.data;
      setActivitie(activitie);
    } catch (error) {
      const errorNews = "Upsss... No se pudo cargar el contenido."
      seterrorNews(errorNews);
    }
  };

  useEffect(() => {
    getNewsNotices();
  }, []);


  const memoActivities = useMemo(
    () =>
    activitie.map((newActivitie) => {
        return (
          <Card key={newActivitie.id} title={newActivitie.name} image={newActivitie.image}/> 
        );
      }),
    [activitie]
  );

  const memoOrError = !errorNews 
  ? 
  <div className="row card-grid-container">
    {memoActivities}
  </div> 
  : 
  <p className="alert alert-danger text-center">{errorNews}</p>;

  return (
    <div className="container">
      <div className="row mt-5">
        {memoOrError}
      </div>
    </div>
  )
};
