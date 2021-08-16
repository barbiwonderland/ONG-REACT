import React, { useMemo } from "react";
import "./members.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const fakeData = [
  {
    name: "Voltsillam",
    image: "images/members/CeciliaMendez.jpeg",
    description: "Maecenas leo odio, condimentum id",
    facebookUrl: "Cis Woman",
    linkedinUrl: "Neither",
  },
  {
    name: "Bamity",
    image: "images/members/Marco Fernandez.jpg",
    description: "Quisque porta volutpat erat. Quisque erat eros, viverra eget",
    facebookUrl: "Transgender Man",
    linkedinUrl: "Bigender",
  },
  {
    name: "Flowdesk",
    image: "images/members/María Garcia.jpg",
    description: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum. ",
    facebookUrl: "Transgender Female",
    linkedinUrl: "Transgender Person",
  },
  {
    name: "Tempsoft",
    image: "images/members/María Irola.jpg",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi.",
    facebookUrl: "Female to Male",
    linkedinUrl: "Trans",
  },
  {
    name: "Sub-Ex",
    image: "images/members/Marita Gomez.jpeg",
    description: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum. ",
    facebookUrl: "Transsexual Woman",
    linkedinUrl: "Androgyne",
  },
  {
    name: "Tres-Zap",
    image: "images/members/Miriam Rodriguez.jpg",
    description: "Quisque id justo sit amet sapien dignissim vestibulum. ",
    facebookUrl: "Transgender Man",
    linkedinUrl: "Androgynous",
  },
  {
    name: "Zontrax",
    image: "images/members/Rodrigo Fuente.jpg",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    facebookUrl: "Gender Variant",
    linkedinUrl: "Transsexual Female",
  },
];

function Members() {
  let member = useMemo(() => {
    return fakeData.map((x) => {
      return (
        <div className="col-md-3 text-center d-flex">
          <div className=" card my-2 ">
            <div className="my-3 text-center pb-3 ">
              <img
                className=" zoom card-img-top mx-auto rounded-circle coverImg sizeImg"
                src={x.image}
                alt={x.name}
              />
              <div className="card-body  ">
                <h5 className=" memberTitle card-title ">{x.name}</h5>
                <div className="triangulo">
                  <p className=" card-text memberSubtitle mb-3">{x.description}</p>
                </div>
              </div>
            </div>
            <div className="bottom mb-2">
              <a href={x.facebookUrl} className="btn btn-primary hover">
                <FaFacebook />
              </a>

              <a href={x.linkedinUrl} className="btn btn-primary mx-3 hover">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      );
    });
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center my-3">{member}</div>
    </div>
  );
}

export default Members;
