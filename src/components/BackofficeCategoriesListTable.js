import React, { memo, useMemo } from "react";
import deleteIcon from "../assets/delete-icon.svg";

export const BackofficeCategoriesListTable = memo((props) => {
  const { handleDelete, handleEdit, data } = props;

  const displayData = data.map((categories) => {
    return (
      <tr key={categories.id}>
        <td>{categories.name}</td>
        <td>{categories.createdAt}</td>
        <td>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => handleDelete(categories)}
          >
            <img
              src={deleteIcon}
              style={{ height: "20px", width: "20px" }}
            ></img>
          </button>
          <button
            className="btn btn-sm btn-warning m-2"
            onClick={() => handleEdit(categories)}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container w-75">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Categories</th>
            <th scope="col">CreatedAt</th>
          </tr>
        </thead>
        <tbody>{displayData}</tbody>
      </table>
    </div>
  );
});
