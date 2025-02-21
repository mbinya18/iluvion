import React from 'react'
import "./Home.css"
import App from '../App'

const Home = () => {
  return (

    <>
    <App/>
    <div className="container-fluid banner">
        <div className="row">
            <div className="col-6">
                <p className='right-business'>The Right Systems & Solutions to Transform your Business</p>
                <p className='grow-your-business'>Grow your business, connect with customers, and get more productive with the right technologies.</p>
                <div className="row">
                    <div className="col-4 mx-5 "><button className='get-started'>Get Started</button></div>
                    <div className="col-4 mx-5 "><button className='learn-more'>Learn More</button></div>
                </div>
            </div>
            <div className="col-6 mx-auto banner-img">
               

            </div>
        </div>
 
    </div>
    </>
  )
}

export default Home