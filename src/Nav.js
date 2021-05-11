import React,{useEffect, useState} from 'react'
import './Nav.css'

function Nav() {
const [show,handleshow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleshow(true)

            } else  handleshow(false)
               
        
        });
        return () => {
            window.removeEventListener("scroll")
        };
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="netflix logo"
            />

            <img className="nav_avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="netflix logo"
            />
        </div>
    )
}

export default Nav
