import React from "react"
//import { Link } from "gatsby"
import Header from "../components/header"



export default function Notiontracking() {
  return (
    <div>
      <Header headerText="Notion Tracking Only"/>
      <p><i>currently under construction</i></p>
      <p>Please visit the work-in-progress <a className="link" id="checklistLink" rel="external noreferrer noopener" target="_blank" href="https://www.notion.so/A-Diversity-Inclusion-Checklist-c4e2d818d55849df88cf0a3e5863671d"><b>checklist</b></a> on Notion</p>
      <img aria-hidden="true" src={require('../images/checklist-tracking.png')} alt="checklist tracking" width="100%"/>
    </div>
  );
}
