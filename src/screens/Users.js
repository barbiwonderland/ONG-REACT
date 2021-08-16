import * as React from "react";
import { HeaderBackOffice } from "../components/HeaderBackOffice";
import UsersList from "../components/UsersList";

function Users() {
  return (
    <>
      <HeaderBackOffice />;
      <UsersList />
    </>
  );
}

export default Users;
