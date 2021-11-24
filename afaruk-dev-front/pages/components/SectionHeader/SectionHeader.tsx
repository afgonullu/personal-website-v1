import React from "react"

const SectionHeader = (props) => {
  return (
    <div className="section-header">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default SectionHeader
