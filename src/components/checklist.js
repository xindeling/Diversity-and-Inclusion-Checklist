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
    <li key={index}>
      <details open="">
        <summary><strong>{list.node.id}. {list.node.title}</strong></summary>
        <div>
          <p>{list.node.summary}</p>
          {list.node.content.map((checklist,index) => <Checkbox key={index} title={checklist.title} details={checklist.details}/>)}
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
