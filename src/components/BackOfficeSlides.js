import React, { useMemo } from "react";
import { Table, Image } from "react-bootstrap";
import confirmAndDelete from "../utils/confirmAndDelete";
import { BsTrash, BsPencil, BsFilePlus, BsPlusCircle } from "react-icons/bs";
import styles from "../styles/BackOfficeSlide.module.css";
import { Link } from "react-router-dom";

export default function BackOfficeSlide() {
  const CONTENT_TYPE = "slides";
  const Data = useMemo(() => {
    return (
      FakeData &&
      FakeData.map((x, i) => (
        <tr className="text-center align-middle" key={i}>
          <td>{x.order}</td>

          <td>{x.name}</td>

          <td>
            <Image
              src={x.image}
              alt={x.name}
              className={styles.maxWidth}
              fluid
            />
          </td>
          <td>
            <button className="btn btn-primary">
              <BsPencil />
            </button>
          </td>

          <td>
            <button
              className="btn btn-danger"
              // "order" must be replaced with the correct id
              onClick={() => confirmAndDelete(x.order, CONTENT_TYPE)}
            >
              <BsTrash />
            </button>
          </td>
        </tr>
      ))
    );
  }, [FakeData]);

  return (
    <div className="text-center container">
      <div className="row d-flex justify-content-center ">
        <div className="col-md-8 mt-5 ">
          <Link to=" /backoffice/slides/create">
            <button className=" w-100 btn btn-primary">
              Agregar Slide <BsFilePlus />
            </button>
          </Link>
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-8 mt-3 ">
          <Table bordered hover>
            <thead>
              <tr>
                <th>Orden</th>
                <th>Titulo</th>
                <th>Imagen</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>{Data}</tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
const FakeData = [
  {
    name: "Riot On!",
    image: "http://dummyimage.com/250x250.png/ff4444/ffffff",
    order: 31,
  },
  {
    name: "The Ghost Story of Oiwa's Spirit",
    image: "http://dummyimage.com/144x100.png/dddddd/000000",
    order: 74,
  },
  {
    name: "Take the Trash",
    image: "http://dummyimage.com/213x100.png/dddddd/000000",
    order: 74,
  },
  {
    name: "Hundred and One Nights, A (Cent et une nuits de Simon Cinéma, Les)",
    image: "http://dummyimage.com/112x100.png/dddddd/000000",
    order: 3,
  },
  {
    name: "Before Sunrise",
    image: "http://dummyimage.com/202x100.png/cc0000/ffffff",
    order: 4,
  },
  {
    name: "Firestorm",
    image: "http://dummyimage.com/200x100.png/cc0000/ffffff",
    order: 54,
  },
  {
    name: "Chernobyl Diaries",
    image: "http://dummyimage.com/138x100.png/cc0000/ffffff",
    order: 34,
  },
  {
    name: "Jackal, The",
    image: "http://dummyimage.com/171x100.png/dddddd/000000",
    order: 69,
  },
  {
    name: "Stop Train 349",
    image: "http://dummyimage.com/245x100.png/cc0000/ffffff",
    order: 47,
  },
  {
    name: "Fourth World War, The",
    image: "http://dummyimage.com/231x100.png/cc0000/ffffff",
    order: 93,
  },
  {
    name: "My First War",
    image: "http://dummyimage.com/139x100.png/cc0000/ffffff",
    order: 59,
  },
  {
    name: "Before the Fall (NaPolA - Elite für den Führer)",
    image: "http://dummyimage.com/129x100.png/dddddd/000000",
    order: 28,
  },
  {
    name: "T.N.T.",
    image: "http://dummyimage.com/246x100.png/cc0000/ffffff",
    order: 89,
  },
  {
    name: "Ballad of the Paper Balloons (a.k.a. Humanity and Paper Balloons) (Ninjô kami fûsen)",
    image: "http://dummyimage.com/127x100.png/cc0000/ffffff",
    order: 84,
  },
  {
    name: "Bullfighter, The (Matador)",
    image: "http://dummyimage.com/228x100.png/dddddd/000000",
    order: 86,
  },
  {
    name: "Secret Life of Words, The",
    image: "http://dummyimage.com/177x100.png/dddddd/000000",
    order: 92,
  },
  {
    name: "Let's Scare Jessica to Death",
    image: "http://dummyimage.com/162x100.png/5fa2dd/ffffff",
    order: 34,
  },
  {
    name: "One Man Band",
    image: "http://dummyimage.com/178x100.png/cc0000/ffffff",
    order: 79,
  },
  {
    name: "Destiny Turns on the Radio",
    image: "http://dummyimage.com/167x100.png/cc0000/ffffff",
    order: 35,
  },
  {
    name: "Dealing: Or the Berkeley-to-Boston Forty-Brick Lost-Bag Blues",
    image: "http://dummyimage.com/115x100.png/dddddd/000000",
    order: 71,
  },
  {
    name: "Yuki & Nina",
    image: "http://dummyimage.com/205x100.png/ff4444/ffffff",
    order: 78,
  },
  {
    name: "Planet 51",
    image: "http://dummyimage.com/116x100.png/cc0000/ffffff",
    order: 46,
  },
  {
    name: "Beastmaster, The",
    image: "http://dummyimage.com/161x100.png/5fa2dd/ffffff",
    order: 26,
  },
  {
    name: "Show of Force, A",
    image: "http://dummyimage.com/245x100.png/ff4444/ffffff",
    order: 28,
  },
  {
    name: "Simone (S1m0ne)",
    image: "http://dummyimage.com/190x100.png/dddddd/000000",
    order: 43,
  },
  {
    name: "Every Night Dreams (Each Night I Dream) (Yogoto no yume)",
    image: "http://dummyimage.com/119x100.png/cc0000/ffffff",
    order: 63,
  },
  {
    name: "Three Caballeros, The",
    image: "http://dummyimage.com/237x100.png/cc0000/ffffff",
    order: 25,
  },
  {
    name: "Miami Rhapsody",
    image: "http://dummyimage.com/184x100.png/cc0000/ffffff",
    order: 41,
  },
  {
    name: "Monkey Business",
    image: "http://dummyimage.com/161x100.png/5fa2dd/ffffff",
    order: 83,
  },
  {
    name: "Incredible Melting Man, The",
    image: "http://dummyimage.com/205x100.png/dddddd/000000",
    order: 61,
  },
];
