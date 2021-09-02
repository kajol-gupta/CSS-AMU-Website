import React from 'react';
import Card from './Card';
import Adata from './Adata';
import './Aboutus.css';




const Aboutus = () => 
{
    return(
        <>
        <div className='background'>
            <h1 className="heading"> About Us </h1>
            <p className="information"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. To be a 
             leading and vibrant institution of excellence in teaching, research and innovation to achieve 
             the national goals of a self-reliant.
             </p>
             <div className='container'>
            {Adata.map((val) => 
                <Card imgsrc={val.imgsrc} title={val.title} content={val.content} link={val.link}/>) }
                </div>
                </div>
     </>
    )
}

export default Aboutus;
