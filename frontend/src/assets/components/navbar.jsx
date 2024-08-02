import React, { useState, useEffect } from 'react';
function Navbar() {
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('menu-active', menuActive);
    }, [menuActive]);

    const handleMenuToggle = () => {
        setMenuActive(!menuActive);
    };
    return (
        <div>
            <nav class="navbar">
                <div class="logo"><img src="./src/assets/img/Ethicraft-logo.png" alt="LOGO"></img></div>
                <div class="push-left">
                    <button id="menu-toggler" data-class="menu-active" class="hamburger" onClick={handleMenuToggle}>
                        <span class="hamburger-line hamburger-line-top"></span>
                        <span class="hamburger-line hamburger-line-middle"></span>
                        <span class="hamburger-line hamburger-line-bottom"></span>
                    </button>


                    <ul id="primary-menu" class="menu nav-menu">
                        <li class="menu-item current-menu-item "><a class="nav__link animate-border" href="#">Home</a></li>
                        <li class="menu-item current-menu-item "><a class="nav__link animate-border" href="#">About Us</a></li>
                        <li class="menu-item current-menu-item "><a class="nav__link animate-border" href="#">Education and Training</a></li>
                        <li class="menu-item dropdown"><a class="nav__link animate-border" href="#">News & Events</a>
                            <ul class="sub-nav" >
                                <li><a class="sub-nav__link" href="#">Recent Events</a></li>
                            </ul>

                        </li>
                        <li class="menu-item dropdown"><a class="nav__link animate-border" href="#">Get Involved</a>
                            <ul class="sub-nav">
                                <li><a class="sub-nav__link" href="#">Overview</a></li>
                                <li><a class="sub-nav__link" href="#">Member</a></li>
                                <li><a class="sub-nav__link" href="#">Campus Embassdor</a></li>
                                <li><a class="sub-nav__link" href="#">Ethiccraft Executive Member</a></li>

                            </ul>
                        </li>

                    </ul>


                </div>
                <button class='glowing-btn'><span class='glowing-txt'>D<span class='faulty-letter'>ona</span>te</span></button>
                <button class='glowing-btn'><span class='glowing-txt'>Jo<span class='faulty-letter'>in</span>Us</span></button>
            </nav>

        </div>
    )
};

export default Navbar;