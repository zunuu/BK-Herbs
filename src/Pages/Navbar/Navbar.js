import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-transperent ">
            <div class="container-fluid">
                <a class="navbar-brand fs-2" href="#">BK-<span className='text-success'>Herbs</span> </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center align-item-center" id="navbarNav">
                    <ul class="navbar-nav ">
                        <li class="nav-item px-5">
                            <a className="nav-link active  navlinks px-2 py-4" aria-current="page" href="#">&nbsp; Home &nbsp;</a>
                        </li>
                        <li class="nav-item px-5">
                            <a className="nav-link active navlinks px-2 py-4" href="#">Products</a>
                        </li>
                        <li class="nav-item px-5">
                            <a class="nav-link active  navlinks px-2 py-4" href="#">&nbsp;Contact&nbsp;</a>
                        </li>
                        <li class="nav-item px-5">
                            <a class="nav-link active navlinks px-2 py-4" href="#"> &nbsp; About &nbsp;</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;