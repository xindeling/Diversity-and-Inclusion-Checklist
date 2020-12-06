import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div>
      <header >
        <Link to="/" >
          <h3>D&I</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
        </ul>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Curated by
        {` `}
        <a className="link" href="https://github.com/xindeling" rel="noreferrer" target="_blank">Xindeling Pan</a>
      </footer>
    </div>
  )
}
