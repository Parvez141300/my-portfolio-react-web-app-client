import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            {/* nav bar start */}
            <nav className='fixed w-full z-50 backdrop-blur-xl bg-primary'>
                <NavBar></NavBar>
            </nav>
            {/* nav bar end */}

            {/* main for route change */}
            <main>
                {/* banner section */}
                <section>
                    
                </section>
                {/* on route change */}
                <Outlet></Outlet>
            </main>

            {/* for footer section */}
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;