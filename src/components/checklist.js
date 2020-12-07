import React, { Component } from 'react';
import { StaticQuery, graphql } from "gatsby"

import Checkbox from "./checkbox"

class Checklist extends Component {
  //constructor(props) {
    //super(props);
  //}

  render() {
    return (
      <StaticQuery
        query={graphql`
          query ChecklistItemsQuery{
            allChecklistItemsJson {
              edges {
                node {
                  id
                  label
                  title
                  summary
                  references {
                    name
                    resourceurl
                    author
                    role
                    description
                  }
                  content {
                    title
                    length
                    details {
                      label
                    }
                  }
                }
              }
            }
          }
        `}
        render={data =>(
          <>
            <ul className="checklist">{getChecklistItems(data)}</ul>
          </>
        )}
      />
    );
  }
}


export default Checklist;

function getChecklistItems(data) {
  const checklistItemsArray = data.allChecklistItemsJson.edges.map((list,index) =>
    <li className="checklist-item" key={index}>
      <details className="accordion" open="">
        <summary className="accordion-title"><strong>{list.node.title}</strong></summary>
        <div className="accordion-content">
          <p className="accordion-summary">{list.node.summary}</p>
          {
            list.node.content.map(function (checklist,index) {
              if(checklist.title !== "quote"){
                return <Checkbox key={index} checklistNo={list.node.label} title={checklist.title} length={checklist.length} details={checklist.details}/>
              }else{
                return <p key={index} className="checklist-quote"><q>{checklist.details[0].label}</q></p>
              }
            })
          }
          <p className="reference-label"><strong>Further readings:</strong></p>
          <p className="reference-resources">
          {
            list.node.references.map((reference,index) =>
                <span key={index} className="reference-item"><a className="link" href={reference.resourceurl} rel="noreferrer" target="_blank">{reference.name} </a> by <i>{reference.author}</i></span>
            )
          }
          </p>

        </div>
      </details>
    </li>
  );
  return checklistItemsArray;
}

/*const content = data.map((list,index) =>
  <li key={index}>
    {list.title}
  </li>
);
*/
