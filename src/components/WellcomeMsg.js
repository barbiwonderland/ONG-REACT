import React, { useState } from "react";

function WellcomeMsg() {
  const [userName, setUserName] = useState("userName");

  return (
    <div className="w-100 text-center mt-5">
      <h1 className="mb-3">Backoffice Dashboard</h1>
      <h2 className="pt-3">Bienvenido {userName}</h2>
    </div>
  );
}

export default WellcomeMsg;
