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
      <Header headerText="Diversity & Inclusion Checklist" subTitle="How to be a Diversity & Inclusion activist, as a designer"/>
      <div className="subheading">
        <p>A practical guide for designers to help ensure Diversity & Inclusion (D&I) is built into any future-state experience. This checklist consists of a list of diversity factors, tasks, and watch-outs that digital experience creators can apply and audit against product/service design work.</p>
      </div>
      <Checklist />
    </Layout>
  );
}
