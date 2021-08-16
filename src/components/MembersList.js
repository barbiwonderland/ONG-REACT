import * as React from "react";
import confirmAndDelete from "../utils/confirmAndDelete";
import { Link } from "react-router-dom";

function MembersList() {
  const rows = fakeData.map(({ id, name, image }) => (
    <tr key={id}>
      <td>{name}</td>
      <td>{image}</td>
      <td>
        <div
          className="btn-group d-flex justify-content-center"
          role="group"
          aria-labelledby="actions"
        >
          <button
            type="button"
            className="btn flex-grow-0 btn-danger"
            onClick={() => confirmAndDelete({ id }, "member")}
          >
            Eliminar
          </button>
          <Link
            className="btn flex-grow-0 btn-outline-primary border-start-0"
            to="/backoffice/members/create"
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
            <th scope="col">image</th>
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

export default MembersList;

const fakeData = [
  {
    id: 1,
    name: "Christian Lamming",
    image: "http://dummyimage.com/184x100.png/ff4444/ffffff",
  },
  {
    id: 2,
    name: "Loren Desantis",
    image: "http://dummyimage.com/108x100.png/ff4444/ffffff",
  },
  {
    id: 3,
    name: "Courtenay Kyllford",
    image: "http://dummyimage.com/105x100.png/ff4444/ffffff",
  },
  {
    id: 4,
    name: "Kristal Biaggioni",
    image: "http://dummyimage.com/146x100.png/ff4444/ffffff",
  },
  {
    id: 5,
    name: "Kristien Corringham",
    image: "http://dummyimage.com/111x100.png/5fa2dd/ffffff",
  },
  {
    id: 6,
    name: "Dickie Crewes",
    image: "http://dummyimage.com/119x100.png/cc0000/ffffff",
  },
  {
    id: 7,
    name: "Inessa Nicklen",
    image: "http://dummyimage.com/238x100.png/5fa2dd/ffffff",
  },
  {
    id: 8,
    name: "Kalil Carty",
    image: "http://dummyimage.com/145x100.png/cc0000/ffffff",
  },
  {
    id: 9,
    name: "Mil Wincom",
    image: "http://dummyimage.com/104x100.png/5fa2dd/ffffff",
  },
  {
    id: 10,
    name: "Aleen Renn",
    image: "http://dummyimage.com/180x100.png/dddddd/000000",
  },
  {
    id: 11,
    name: "Jecho Amer",
    image: "http://dummyimage.com/130x100.png/dddddd/000000",
  },
  {
    id: 12,
    name: "Larine Bonnell",
    image: "http://dummyimage.com/139x100.png/ff4444/ffffff",
  },
  {
    id: 13,
    name: "Gretal Rattenberie",
    image: "http://dummyimage.com/228x100.png/ff4444/ffffff",
  },
  {
    id: 14,
    name: "Costanza Panther",
    image: "http://dummyimage.com/168x100.png/5fa2dd/ffffff",
  },
  {
    id: 15,
    name: "Saundra Stack",
    image: "http://dummyimage.com/191x100.png/ff4444/ffffff",
  },
];
