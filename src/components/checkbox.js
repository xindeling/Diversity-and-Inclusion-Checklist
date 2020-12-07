import React, { Component } from 'react';
/*
export default function Checkbox(props) {
  return (
    <h1>{props.headerText}</h1>
  );
}
*/

class Checkbox extends Component {
  //constructor(props) {
    //super(props); column-count: 4;
  //}

  render() {
    let details = this.props.details;
    details.sort((a, b) => a.label.localeCompare(b.label))

    const content = details.map((list,index) =>
      <li className="checkbox-item" key={index}>
        <label className ="checkbox" htmlFor={`${this.props.checklistNo}-${list.label}`}>
          <input name={list.label} id={`${this.props.checklistNo}-${list.label}`} type="checkbox"/>
          {list.label}
          <span className="checkbox-indicator"></span>
        </label>
      </li>
    );

    return (
      <>
        <p className="checkbox-title"><strong>{this.props.title}</strong></p>
        <ul className={"checkbox-group " + (this.props.length === 'short'? 'multi-column' : '')}>
          {content}
        </ul>
      </>

    );
  }
}


export default Checkbox;
