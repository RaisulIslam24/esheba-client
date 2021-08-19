import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../NavBar/NavBar';

const Header = () => {
  

    return (
        <section className="header">
           <NavBar/>
           <HeaderMain/>
        </section>

    );
};

export default Header;