import React from 'react';
import { NavLink } from 'react-router-dom';
import Comman from './Comman';
import img from './img/man1.png';


const Home=()=>{
    return(
        <>
<Comman
    name='Grow your besiness with'
imgsre={img}
link='/services'
button='Get Started'
/>
        </>
    );
}
export default Home;