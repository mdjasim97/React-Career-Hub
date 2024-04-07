import React, { useEffect, useState } from 'react';
import Catagory from '../Catagory/Catagory';

const Catagories = () => {

    const [catagory, setCatagory] = useState([]);



    useEffect(() => {
        fetch("/categories.json")
            .then(res => res.json())
            .then(data => setCatagory(data))
    }, [])


    return (
        <div className='my-24'>
            <div className='my-10'>
                <h1 className='text-5xl text-center font-bold p-4'>Job Category List : {catagory.length}</h1>
                <p className='text-center text-base'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-10'>
                {
                    catagory.map(catagory=><Catagory key={catagory.id} catagory={catagory}></Catagory>)
                }
            </div>
        </div>
    );
};

export default Catagories;