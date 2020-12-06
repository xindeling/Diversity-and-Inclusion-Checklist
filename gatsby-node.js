const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path');
const checklistItems = require('./src/data/ChecklistItems.json');

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log(createFilePath({ node, getNode, basePath: `pages` }))
  }
}

/*
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  checklistItems.forEach((checklistItem) => {
    // 1. Extract the card data.
    const {
      id,
      label,
      content,
    } = checklistItem;
    // 2. Build the PortfolioCard node. Note that most fields simply correspond to
    //    to our JSON data.
    const node = {
      id,
      label,
      content, // <------ and here
      //id: createNodeId(`checklist-${title}`),
      internal: {
        type: 'checklistItem',
        contentDigest: createContentDigest(checklistItem),
      },
    };
    // 3. Create the node
    actions.createNode(node);
  });
};
*/
