import React from "react";
import "./style.css";

function Card(props) { /*wrap para remover duplicações em CSS */
  const classes = "card " + props.className;

  return (
    <div className={classes}>{props.children}</div> /*indica que o Card terá childrens*/
  ); 
}

export default Card;
