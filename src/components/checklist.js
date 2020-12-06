import React, { Component } from 'react';
import { StaticQuery, graphql } from "gatsby"

import Checkbox from "./checkbox"

class Checklist extends Component {
  //constructor(props) {
    //super(props);
  //}

  render() {
    /*const content = data.map((list,index) =>
      <li key={index}>
        {list.title}
      </li>
    );
*/

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
                  content {
                    title
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
            <ul>{getChecklistItems(data)}</ul>
          </>
        )}
      />
    );
  }
}


export default Checklist;

/*
export default function Checklist({children}) {
  const data = useStaticQuery(
    graphql`
      query ChecklistItemsQuery{
        allChecklistItemsJson {
          edges {
            node {
              id
              label
              title
              content {
                title
                details {
                  label
                }
              }
            }
          }
        }
      }
    `
  )

  const lists => {}
  return (
    <p>{data.site.siteMetadata.title}</p>
  );
}
*/
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
                return <Checkbox key={index} checklistNo={list.node.label} title={checklist.title} details={checklist.details}/>
              }else{
                return <p className="checklist-quote"><q>{checklist.details[0].label}</q></p>
              }
            })
          }
          {/*
          {
            list.node.content.map((checklist,index) => <Checkbox key={index} checklistNo={list.node.label} title={checklist.title} details={checklist.details}/>)
          }
          */}
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
