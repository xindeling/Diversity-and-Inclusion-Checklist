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
    //super(props);
  //}

  render() {
    let details = this.props.details;
    details.sort((a, b) => a.label.localeCompare(b.label))
    
    const content = details.sort().map((list,index) =>
      <li key={index}>
        <label htmlFor={list.label}>
          <input name={list.label} id={list.label} type="checkbox"/>
        {list.label}
        </label>
      </li>
    );

    return (
      <ul>
        <strong>{this.props.title}</strong>
        {content}
      </ul>
    );
  }
}


export default Checkbox;
