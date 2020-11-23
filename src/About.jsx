import React from 'react';
import Comman from './Comman';
import img from './img/man1.png';

const About=()=>{
    return(
        <>
                <Comman
name='Welcome to about page'
imgsre={img}
link='/contact'
button='Contact Now'

                />


        </>
    );
}
export default About;