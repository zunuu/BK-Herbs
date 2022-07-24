import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-transperent">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">BK-<span className='text-success'>Herbs</span> </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center align-item-center" id="navbarNav">
                    <ul class="navbar-nav ">
                        <li class="nav-item px-5">
                            <a className="nav-link active fw-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item px-5">
                            <a className="nav-link active fw-light" href="#">Products</a>
                        </li>
                        <li class="nav-item px-5">
                            <a class="nav-link active fw-light" href="#">Contact</a>
                        </li>
                        <li class="nav-item px-5">
                            <a class="nav-link active fw-light" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;