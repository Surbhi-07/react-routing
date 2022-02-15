import React, { Component } from 'react'
import { Link,Outlet } from 'react-router-dom'

export default class About extends Component {
  render() {
    return (
      <div>
          <Link to ="/About/About1">About-1</Link>
          <Link to ="/About/About2">About-2</Link>
          <Outlet />
      </div>
    )
  }
}
