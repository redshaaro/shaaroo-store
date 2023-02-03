import React from 'react'
import Categories from '../../components/categories/Categories';
import Featured from '../../components/featured/Featured';
import Slider from '../../components/Slider/Slider'
import Trending from '../../components/trending/Trending'
import Contact from '../../components/contactus/Contact'


import style from './home.module.css';

const Home = () => {
  return (
    <div className={style.container}>
      <Slider></Slider>
      <Featured></Featured>
      <Categories></Categories>
      <Trending></Trending>
      <Contact></Contact>

    </div>
  )
}

export default Home