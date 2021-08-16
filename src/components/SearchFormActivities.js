import React, {useState } from "react";
import { SearchActivities } from "../services/activitiesService";
export const SearchFormActivities = () => {
  const [searchActivitie, setSearchActivitie] = useState("");

  const handleInputChange = async (e) => {
    // // setSearchActivitie({
    // //   ...searchActivitie,
    // //   [e.target.name]: e.target.value,
    // // });

    // using only 1 state for saving the response of Api.
    const {
      data: { data },
    } = await SearchActivities(`${e.target.value}`);
    setSearchActivitie(data);
  };
  // results
  console.log(searchActivitie);

  return (
    <>
      <div className="container my-2" style={{ maxWidth: 1000 }}>
        <input
          placeholder="Busque una actividad..."
          className="form-control"
          type="text"
          name="activitie"
          onChange={handleInputChange}
        ></input>
      </div>
    </>
  );
};
