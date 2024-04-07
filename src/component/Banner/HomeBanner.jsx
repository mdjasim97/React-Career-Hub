import React from 'react';

const HomeBanner = () => {
    return (
        <div>
            <div className="hero min-[500px] bg-base-200 border">
                <div className="hero-content space-y-6 flex flex-col lg:flex-row">
                    {/* <img src="../../assets/images/user.png" className="max-w-sm rounded-lg shadow-2xl" /> */}
                    <div className='flex-1 text-center lg:text-start lg:p-24'>
                        <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <span className='text-[#7E90FE]'>Dream Job</span></h1>
                        <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn bg-[#7E90FE] text-white">Get Started</button>
                    </div>

                    <div  className='flex-1'>
                        <img className='' src="https://i.postimg.cc/tgZRj4Gq/user.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;