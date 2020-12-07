import React from "react"

export default function Header(props) {
  return (
    <div className="page-title">
      <h1>{props.headerText}</h1>
      {props.subTitle?<p>{props.subTitle}</p>:''}
    </div>
  );
}
