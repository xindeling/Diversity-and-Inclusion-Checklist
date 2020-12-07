import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <Link className="link nav-link" to={props.to}>{props.children}</Link>
)

export default function Layout({ children }) {
  return (
    <div>
      <header >
        <nav>
          <Link to="/" >
            <h3>D<small>&</small>I</h3>
          </Link>
          <div className="nav-links"style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/about/">About</ListLink>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        Last updated on Dec 7, 2020 | Curated by
        {` `}
        <a className="link" href="https://github.com/xindeling" rel="noreferrer" target="_blank">Xindeling Pan</a>
      </footer>
    </div>
  )
}
