const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path');
const checklistItems = require('./src/data/ChecklistItems.json');

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log(createFilePath({ node, getNode, basePath: `pages` }))
  }
}
