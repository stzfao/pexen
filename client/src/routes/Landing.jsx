import React from 'react'
import Login from '../components/Login';
import '../index.css';

const Landing = () => {
    return (
        <section>
            <div className="min-h-screen ">
                <div className='mt-12 flex grid-cols-3 gap 4 justify-evenly'>
                    <section className='m-10 '>
                        <Login />
                    </section>
                    <div className='blob m-10 '></div>
                </div>
            </div>
            <div className="min-h-screen ">
                <div id='features'>
                    <div className='mt-12 flex grid-cols-3 gap 4 justify-evenly'>
                        <div className='blob m-10 '></div>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Landing;