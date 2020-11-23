import React from 'react';
import { NavLink } from 'react-router-dom';
const Comman=(props)=>{
    return(
        <>
<section id='header' className='d-flex align-items-center'>
<div className='container-fluid nav-bg'>
    <div className='row'>
    <div className='col-10 mx-auto'>
    <div className='row'>
    <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
    <h1>{props.name} <strong className='brand-name'> Rajput</strong> </h1>
    <h5 className='my-3'> We are the team of talented developer making websites</h5>
   
    <div className='mt-3'>
    <NavLink to={props.link} className='btn-get-started' >{props.button}</NavLink>
    </div>
    </div>
    <div className='mt-3 col-lg-6 order-1 order-lg-2 header-img'>
        <img src={props.imgsre} className='img-fluid animation' alt='img' />
    </div>
    </div>
    </div>
    </div>
</div>
</section>
        </>
    );
}
export default Comman;