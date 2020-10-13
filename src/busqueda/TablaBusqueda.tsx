import React from 'react';
// import * as MaterialTable from "material-table";

type IType =
  | "string"
  | "boolean"
  | "numeric"
  | "date"
  | "datetime"
  | "time"
  | "currency";
const string: IType = "string";

export const tableContent = () => {
  const data = [
    { name: "John", email: "john@gmail.com", age: 12, gender: "Male" },
    { name: "Bren", email: "bren@gmail.com", age: 24, gender: "Male" },
    { name: "Marry", email: "marry@gmail.com", age: 18, gender: "Female" },
    { name: "Shohail", email: "shohail@gmail.com", age: 25, gender: "Male" },
    { name: "Aseka", email: "aseka@gmail.com", age: 19, gender: "Female" },
    { name: "Meuko", email: "meuko@gmail.com", age: 12, gender: "Female" },
  ];
};

const columns = [
  {
    title: "Name",
    field: "name",
  },
  {
    title: "Email",
    field: "email",
  },
  {
    title: "Age",
    field: "age",
  },
  {
    title: "Gender",
    field: "gender",
  },
];

export const TablaBusqueda = () => {
  return (
      <div></div>
    // <MaterialTable
    //   title="Employee Details"
    //   data={tableContent()}
    //   columns={columns}
    //   options={{
    //     search: true,
    //     paging: false,
    //     filtering: true,
    //     exportButton: true,
    //   }}
    // />
  );
};
