import React from "react"
//import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "../components/header"



export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Diversity and Inclusion Checklist</title>
        <meta name="description" content="A hands-on diversity and inclusion checklist for designers" />
        <meta name="author" content="Xindeling Pan" />
      </Helmet>
      <Header headerText="Diversity & Inclusion Checklist"/>
      <p><i>currently under construction</i></p>
      <p>Please visit the work-in-progress <a className="link" id="checklistLink" rel="external noreferrer noopener" target="_blank" href="https://www.notion.so/A-Diversity-Inclusion-Checklist-c4e2d818d55849df88cf0a3e5863671d"><b>checklist</b></a> on Notion</p>
    </div>
  );
}
