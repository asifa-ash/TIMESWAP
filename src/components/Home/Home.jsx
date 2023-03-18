import React from 'react'
import NavOne from '../NaveOne/NavOne'
import NavTwo from '../Navtwo/NavTwo'
import Table from '../table/Table'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <NavOne/>
      <NavTwo/>
      <Table/>
    </div>
  )
}

export default Home
