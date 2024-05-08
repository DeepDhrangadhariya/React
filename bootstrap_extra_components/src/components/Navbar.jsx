import React from 'react'
import {
    Link
  } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
            <div className="container">
                <Link className="navbar-brand text-uppercase fw-bold d-lg-none" to="/home">Start Bootstrap</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/">Home</Link></li>
                        <li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/about">About</Link></li>
                        <li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/products">Products</Link></li>
                        <li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/store">Store</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}
