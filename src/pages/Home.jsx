import React from 'react'
import { Link } from 'react-router-dom'
import Discounted from '../components/Discounted.jsx'
import Explore from '../components/Explore.jsx'
import Featured from '../components/Featured.jsx'
import Highlights from '../components/Highlights.jsx'
import Landing from '../components/Landing.jsx'

class Home extends React.Component {
  render() {
    return (
      <>
        <Landing />
        <Highlights />
        <Featured />
        <Discounted />
        <Explore />
      </>
    )
  }
}

export default Home