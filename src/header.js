import React from 'react';
 
export default function Header () {
    return (
        <header>
        <nav className = "nav navbar navbar-expand-lg navbar-light bg-primary">
            <img src="./logo512.png" alt="reactlogo"></img>   
            <ul className ="nav-items" >
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
        )
}

