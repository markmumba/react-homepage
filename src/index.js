import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import Header from './header';
import Maindata from './maincontent';
import Footer from './footer';


 function App() {
    return (
        <div className= "container-fluid">
        <Header />
        <Maindata />
        <Footer />
        </div>
        
    )
 }




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />)
