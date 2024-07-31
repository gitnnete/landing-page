import React from 'react'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
  <div className="container">
    <a className="navbar-brand fs-3 fw-bold text-success" href="#">
       React.
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link text-light active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Company</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Resources</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar