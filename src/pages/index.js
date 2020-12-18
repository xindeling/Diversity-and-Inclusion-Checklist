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
      <Header headerText="Diversity & Inclusion Checklist" subTitle="A practical guide for inclusive design activist"/>
      <div className="subheading">
        <p>A list of tasks and watch-outs that can help digital experience creators design for diversity and inclusion. Designers alone won’t be able to fix all the social inequality, but it’s time for us to complete the shift from user-centered design to human-centered design.</p>
      </div>
      <Checklist />
    </Layout>
  );
}
