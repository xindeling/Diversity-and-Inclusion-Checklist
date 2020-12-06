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
      <Checklist />
    </Layout>
  );
}
