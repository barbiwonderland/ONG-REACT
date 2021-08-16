import * as React from "react";
import { Link } from "react-router-dom";
import confirmAndDelete from "../utils/confirmAndDelete";

const CONTENT_TYPE = "user";

function UsersList() {
  const rows = fakeData.map(({ id, name, email }) => (
    <tr key={id}>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <div
          className="btn-group d-flex justify-content-center"
          role="group"
          aria-labelledby="actions"
        >
          <button
            type="button"
            className="btn flex-grow-0 btn-danger"
            onClick={() => confirmAndDelete(id, CONTENT_TYPE)}
          >
            Eliminar
          </button>
          <Link
            className="btn flex-grow-0 btn-outline-primary border-start-0"
            to="/backoffice/users/create"
          >
            Editar
          </Link>
        </div>
      </td>
    </tr>
  ));

  return (
    <div className="table-responsive">
      <table className="table container">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th className="text-center" scope="col" id="actions">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default UsersList;

const fakeData = [
  { id: 1, name: "Jaymee Roja", email: "jroja0@yahoo.co.jp" },
  { id: 2, name: "Claus Brownill", email: "cbrownill1@blogger.com" },
  { id: 3, name: "Des Jaffa", email: "djaffa2@admin.ch" },
  { id: 4, name: "Diena Dwyr", email: "ddwyr3@liveinternet.ru" },
  { id: 5, name: "Goldia Spellsworth", email: "gspellsworth4@psu.edu" },
  { id: 6, name: "Rhys Rostron", email: "rrostron5@4shared.com" },
  { id: 7, name: "Gherardo Potes", email: "gpotes6@chicagotribune.com" },
  { id: 8, name: "Arda Atmore", email: "aatmore7@upenn.edu" },
  { id: 9, name: "Rube Batter", email: "rbatter8@miibeian.gov.cn" },
  { id: 10, name: "Roseanne Jermyn", email: "rjermyn9@meetup.com" },
  {
    id: 11,
    name: "Willard Chipperfield",
    email: "wchipperfielda@theguardian.com",
  },
  { id: 12, name: "Crystie Leal", email: "clealb@zimbio.com" },
  { id: 13, name: "Elbertine Tissington", email: "etissingtonc@vimeo.com" },
  { id: 14, name: "Imogene Ridgley", email: "iridgleyd@hhs.gov" },
  { id: 15, name: "Dewie Deards", email: "ddeardse@reverbnation.com" },
];
