import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

function CategoryComp({ callbackCategory }) {
  return (
    <ButtonGroup>
      <Button
        style={{ margin: "2px", borderRadius: "10px" }}
        key={"btn1"}
        variant={"warning"}
        onClick={() => callbackCategory("fantasy")}
      >
        Fantasy
      </Button>
      <Button
        style={{ margin: "2px", borderRadius: "10px" }}
        key={"btn2"}
        variant={"warning"}
        onClick={() => callbackCategory("history")}
      >
        History
      </Button>
      <Button
        style={{ margin: "2px", borderRadius: "10px" }}
        key={"btn3"}
        variant={"warning"}
        onClick={() => callbackCategory("horror")}
      >
        Horror
      </Button>
      <Button
        style={{ margin: "2px", borderRadius: "10px" }}
        key={"btn4"}
        variant={"warning"}
        onClick={() => callbackCategory("romance")}
      >
        Romance
      </Button>
      <Button
        style={{ margin: "2px", borderRadius: "10px" }}
        key={"btn5"}
        variant={"warning"}
        onClick={() => callbackCategory("scifi")}
      >
        Sci-Fi
      </Button>
    </ButtonGroup>
  );
}

export default CategoryComp;
