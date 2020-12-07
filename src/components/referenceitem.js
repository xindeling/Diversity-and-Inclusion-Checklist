import React from 'react';

export default function Referenceitem(props) {
  return (
    <li className="reference-list-item">
      <a className="link" href={props.referenceitems.resourceurl} rel="noreferrer" target="_blank"> {props.referenceitems.name}</a> by <i>{props.referenceitems.authordisplay}</i>
    </li>
  );
}
