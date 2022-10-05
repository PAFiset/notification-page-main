import Navbar from '../../styles/Header.module.scss';
import { useState } from 'react';


const Header = () => {

    const [isMobileModal,setMobileModal] = useState(false);

    const clickHandler = () =>{
        setMobileModal(!isMobileModal);
    };

    return ( 
        <>    
            <div className={Navbar.navbar} >
                <div className={Navbar.navcontent}>
                    <p>snap</p>
                    <a href="https://www.google.ca" target="_blank">Features</a>
                    <a href="https://www.google.ca" target="_blank">Compagny</a>
                    <a href="https://www.google.ca" target="_blank">Career</a>
                    <a href="https://www.google.ca" target="_blank">About</a>
                </div>
            </div> 
            <div className={isMobileModal ? Navbar.navbarmobile : Navbar.navbarmobileclosed} >
                <p>-- snap --</p>
                <a href="https://www.google.ca" target="_blank">Features</a>
                <a href="https://www.google.ca" target="_blank">Compagny</a>
                <a href="https://www.google.ca" target="_blank">Career</a>
                <a href="https://www.google.ca" target="_blank">About</a>
            </div> 
            <span className={ isMobileModal ? Navbar.navicon_open + " " + Navbar.navicon :  Navbar.navicon} onClick={clickHandler} >
                <span></span>
                <span></span>
                <span></span>
            </span>
        </>
    );
}
 
export default Header;