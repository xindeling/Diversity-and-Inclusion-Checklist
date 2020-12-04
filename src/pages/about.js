import React from "react"
//import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Helmet>
        <title>About</title>
        <meta name="description" content="A hands-on diversity and inclusion checklist for designers" />
        <meta name="author" content="Xindeling Pan" />
      </Helmet>
      <Header headerText="About"/>
      <p><i>currently under construction</i></p>
    </div>
  );
}
