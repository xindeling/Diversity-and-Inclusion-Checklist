import React, { Component } from 'react';
import { StaticQuery, graphql } from "gatsby"

import Referenceitem from "./referenceitem"

class References extends Component {
  //constructor(props) {
    //super(props);
  //}

  render() {

    return (
      <StaticQuery
        query={graphql`
          query ReferencesQuery{
            allReferencesJson {
              edges {
                node {
                  name
                  resourceurl
                  type
                  author
                  authordisplay
                  role
                  quote
                  description
                  tags
                }
              }
            }
          }
        `}
        render={data =>(
          <>
            <ul className="reference-list">{getReferencesItems(data)}</ul>
          </>
        )}
      />
    );
  }
}



export default References;

function getReferencesItems(data) {

  const referencesGroupedByTagObject = data.allReferencesJson.edges.reduce(function (r, a) {
        r[a.node.tags] = r[a.node.tags] || [];
        r[a.node.tags].push(a.node);
        return r;
    }, Object.create(null));

  /* Sort by Tag */
  const sortedObject = Object.keys(referencesGroupedByTagObject).sort().reduce((r, k) => (r[k] = referencesGroupedByTagObject[k], r), {});

  const referencesItemsArray = Object.entries(sortedObject).map(([tag,references])=>{
    references.sort((a, b) => a.name.localeCompare(b.name))
    return   <li key={tag}>
                <p><strong>{tag}</strong></p>
                <ul>
                {
                  references.map((reference,index) =>
                    <Referenceitem key={index} referenceitems={reference}/>
                  )
                }
                </ul>
              </li>
  });
  return referencesItemsArray;

}
