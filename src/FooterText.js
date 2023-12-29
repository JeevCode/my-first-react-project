import React from 'react'

function FooterText(props) {
  return (
    <div>
    <div>New Component Text Here is {props.FooterSize}</div>
    <div> {props.Text}</div>
    </div>
  )
}

export default FooterText