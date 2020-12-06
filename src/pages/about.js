import React from "react"
//import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "./layout"
import Header from "../components/header"

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>About</title>
        <meta name="description" content="A hands-on diversity and inclusion checklist for designers" />
        <meta name="author" content="Xindeling Pan" />
      </Helmet>
      <Header headerText="About"/>
      <p><i>currently under construction</i></p>
    </Layout>
  );
}
