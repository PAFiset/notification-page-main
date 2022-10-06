import Navbar from '../styles/Header.module.scss';
import { useState , useEffect } from 'react';
import Link from 'next/link';


const Header = () => {

    const getWindowDimension = () =>{
      const width = window.innerWidth;
      return width;
    };

    useEffect(() => {
      function handleResize() {
        getWindowDimension() < 700 ? "" : setMobileModal(false);
      }

      window.addEventListener('resize', handleResize);
    }, []);

    const [isMobileModal,setMobileModal] = useState(false);

    const clickHandler = () => {
        setMobileModal(!isMobileModal);
    };



    return ( 
        <>    
            <div className={Navbar.navbar} >
                <div className={Navbar.navcontent}>
                    <p>snap</p>
                    <Link href="/usagers"><span>Usager</span></Link>
                    <Link href="/createur"><span>Créateur</span></Link>
                    <Link href="/projets"><span>Projets</span></Link>
                    <Link href="/about"><span>About</span></Link>
                </div>
            </div> 
            <div className={isMobileModal ? Navbar.navbarmobile : Navbar.navbarmobileclosed} >
                <p>-- snap --</p>
                <Link href="/usagers" ><span >Usager</span></Link>
                <Link href="/createur" ><span >Créateur</span></Link>
                <Link href="/projets" ><span >Projets</span></Link>
                <Link href="/about" ><span >About</span></Link>
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