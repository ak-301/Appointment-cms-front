import React from 'react';
import {Navbar,NavbarToggler,NavbarBrand,Collapse,Nav,NavItem,NavLink} from 'reactstrap'

const Navbars = () => {
  return (
    <div>
  <Navbar
    color="dark"
    dark
    expand="md"
    fixed=""
    light
    className="navbars"
  >
    <NavbarBrand href="/">
      Nail Art by Pooja
    </NavbarBrand>
    
    
      <Nav
        className="me-auto"
        navbar
      >
        {/* <NavItem>
          <NavLink href="/">
            Home
          </NavLink>
        </NavItem> */}
        <NavItem>
          <NavLink href="/orders">
            Orders
          </NavLink>
        </NavItem>
      
      </Nav>
  </Navbar>
</div>

  )
}

export default Navbars