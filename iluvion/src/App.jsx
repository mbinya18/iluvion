import React from 'react'
import './App.css'

const App = () => {
  return (
    <>
    <div className="header container-fluid mx-auto bg-purple">
      <nav className='navbar navbar-expand-lg '>
        <div className="container-fluid">
          <a className='brand' href="#">Iluvion</a>

          <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
          > <span className="navbar-toggler-icon"></span></button>

<div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link " href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pillars</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Solutions</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Clients</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
    </div>

        </div>
      </nav>

    </div>
    
    </>
  )
}

export default App