import React, { Component } from 'react';
import { StaticQuery, graphql } from "gatsby"
/*
export default ({ data }) => (
  <div>
    <h1>Products</h1>
    {data.allProductsJson.edges.map(edge => <div>{edge.node.id} {edge.node.name}</div>)}
  </div>
)

export const query = graphql`
  query {
    allProductsJson {
      edges {
        node {
          name
          id
        }
      }
    }
  }
`
*/

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
      {list.node.title}
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
