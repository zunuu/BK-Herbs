import React from 'react';
import './Navbar.css';
// import logoimg from '../../images/plant (2).png'
import { Link } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
const Navbar = () => {
    return (
<div>
      
           
   <nav class="navbar navbar-expand-lg bg-transperent ">
   <div class="container-fluid">

       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse justify-content-center align-item-center" id="navbarSupportedContent">
           <ul class="navbar-nav ">
               <li class="nav-item px-5">
                   <Link className="nav-link active  navlinks px-2 py-4" aria-current="page" to="/home">&nbsp; Home &nbsp;</Link>
               </li>
               <li class="nav-item px-5">
                   <Link className="nav-link active navlinks px-2 py-4"
                       to="/products">Products</Link>
               </li>
               <li class="nav-item px-5">
                   <Link class="nav-link active  navlinks px-2 py-4" to="/contact">&nbsp;Contact&nbsp;</Link>
               </li>
               <li class="nav-item px-5">
                   <Link class="nav-link active navlinks px-2 py-4" to="/about"> &nbsp; About &nbsp;</Link>
               </li>
           </ul>
       </div>
   </div>
    </nav>
</div>
    );
};

export default Navbar;