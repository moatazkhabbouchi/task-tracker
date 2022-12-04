import React from "react";
import Button from "./Button";

const header = ({ onAdd, showAdd }) => {
  const onClick = () => {
    console.log("Clicked");
  };
  return (
    <div className="header">
      <h1>Task Tracker</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </div>
  );
};

export default header;
