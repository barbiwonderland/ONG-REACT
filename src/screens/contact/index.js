import React, { useEffect, useState } from "react";
import { getContacts } from "../../services/contactService";
import ContactData from "../../components/ContactData";
import MapComponent from "./components/Map";
import { TitlesComponent } from "../../components/TitlesComponent";
import FormularioContacto from "../../components/FormularioContacto";

function Index() {
  const [data, setData] = useState("");

  useEffect(() => {
    getContacts().then((d) => {
      if (d === false) setData(null);
      else setData(d.data);
    });
  }, []);

  return (
    <div>
      <TitlesComponent title="Contacto"/>
      <MapComponent />
      <FormularioContacto />
      <div className="container">
      <div className="row">
      <ContactData data={data} />
      </div>
      </div>
    </div>
  );
}

export default Index;
