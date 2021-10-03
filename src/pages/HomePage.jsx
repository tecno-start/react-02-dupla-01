import React from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
// import Button from 'reactstrap/lib/Button';

function HomePage() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <h1>Home Page</h1>
                <button>Voltar</button>
            </div>
        </div>
    )
}

export default HomePage

