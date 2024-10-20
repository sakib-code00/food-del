import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {
const [category, setCategory] = useState("All");

  return (
    <div>
        <Header></Header>
        <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
    </div>
  ) 
}

export default Home