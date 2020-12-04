import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Header headerText="Hello Gatsby"/>
      <p>What a world.</p>
      <Link to="/about/">About</Link>
    </div>
  );
}
