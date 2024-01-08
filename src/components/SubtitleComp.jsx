import React from "react";
import { Alert } from "react-bootstrap";

function SubtitleComp() {
  return (
    <div className=" text-center">
      <h2>Passa al lato oscuro, noi abbiamo i libri</h2>
      <Alert key="warning" variant="warning">
        Dart Pippo the Booklover
      </Alert>
    </div>
  );
}
export default SubtitleComp;
