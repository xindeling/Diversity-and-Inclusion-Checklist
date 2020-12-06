import React from "react"
//import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "./layout"
import Header from "../components/header"
import Checklist from "../components/checklist"



export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Diversity and Inclusion Checklist</title>
        <meta name="description" content="A hands-on diversity and inclusion checklist for designers" />
        <meta name="author" content="Xindeling Pan" />
      </Helmet>
      <Header headerText="Diversity & Inclusion Checklist"/>
      <p><i>currently under construction</i></p>

      <label htmlFor="chk-1">
        <input name="chk-1" id="chk-1" type="checkbox"/>
      chk-1
      </label>
      <label htmlFor="chk-2">
        <input name="chk-2" id="chk-2" type="checkbox"/>
      chk-2
      </label>
      <Checklist />
      <p>Please visit the work-in-progress <a className="link" id="checklistLink" rel="external noreferrer noopener" target="_blank" href="https://www.notion.so/A-Diversity-Inclusion-Checklist-c4e2d818d55849df88cf0a3e5863671d"><b>checklist</b></a> on Notion</p>
    </Layout>
  );
}
