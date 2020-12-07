import React from "react"
//import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "./layout"
import Header from "../components/header"
import References from "../components/references"

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>About</title>
        <meta name="description" content="A hands-on diversity and inclusion checklist for designers" />
        <meta name="author" content="Xindeling Pan" />
      </Helmet>
      <Header headerText="About"/>
      <div className="subheading">
        <p>Diversity & Inclusion is more than a checkbox. It's a long-term investment that we need to work on every day. This project is intended to bring awareness of issues around race, gender, inclusion, and more. Also, it can serve as a starting point for diversity & inclusion optimization in design work. This checklist will continue to evolve as we keep learning and practicing activism through design.</p>
        <figure className="figure-quote">
            <blockquote cite="https://www.huxley.net/bnw/four.html">
                Diversity is being invited to the party, inclusion is being asked to dance.
            </blockquote>
            <figcaption>— Vernā Myers, Cultural change catalyst</figcaption>
        </figure>
        <p>To learn about the background of this project, please visit the blog post on Medium. Feedback and questions are welcome. You can submit a <a className="link" rel="noreferrer" href="https://github.com/xindeling/Diversity-and-Inclusion-Checklist" target="_blank">Github Issue</a> or contact via <a className="link" rel="noreferrer" href="https://forms.gle/J1oTDmXVkk6KZkft8" target="_blank">Google Form</a>.</p>
      </div>
      <div className="container-about">
        <h3 className="section-title">Further Readings</h3>
        <p>Resources that were helpful and insightful to learn about inclusive design.</p>
        <References />
      </div>
    </Layout>
  );
}
