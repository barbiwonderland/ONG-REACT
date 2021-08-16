import React from 'react';
import { useMemo } from 'react';

export const ActivitiesHome = ({activities}) => {


 let  memoActivities = useMemo(
    () =>
    activities.map((activity) => {
        return(
          <div key={activity.id} className="col-md-4 bg-light text-center  m-2 shadow-lg p-3 mb-5 bg-white rounded">
            <p>{activity.name}</p>
          </div>
        );
      }),
    [activities]
  );

  if(memoActivities.length===0){
    memoActivities=(

      <p className="alert alert-danger text-center">
      Upsss... No se pudo cargar el contenido.
    </p>

    )
  }

  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        {memoActivities}
       

      </div>
    </div>
  )
};