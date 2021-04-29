import React from 'react';
import './Footer.scss';

import { Link } from 'react-router-dom';

import logo_fb from '../images/facebook.png';
import logo_instagram from '../images/instagram.png';
import logo_linkedin from '../images/linkedin.png';
import logo_twitter from '../images/twitter.png';

class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <footer>
                <div className="content">
                    <div id="legal_description">
                        <h5>Pop Pods Limited</h5>
                        <p>
                            © 2020. All rights reserved.<br />
                            Pop Pods Ltd is a company registered in England and Wales<br />
                            <br />
                            Ground Floor - Unit 1 Bache's Street<br />
                            N1 6DL, London, UK
                        </p>
                    </div>
                    <div id="sitemap">
                        <div>
                            <h5>Space</h5><br />
                            <Link to="">Bookings</Link><br />
                            <Link to="">FAQs</Link><br />
                            <Link to="">Property</Link>
                        </div>
                        <div>
                            <h5>Corporate</h5><br />
                            <Link to="">Order your pod</Link><br />
                            <Link to="">Sessions</Link>
                        </div>
                        <div>
                            <h5>Community</h5><br />
                            <Link to="">Blog</Link>
                        </div>
                    </div>
                    <div id="social_links">
                        <a className="social_link" href="https://www.facebook.com/PopnRest/" target="_blank">
                            <img src={logo_fb} />
                        </a>
                        <a className="social_link" href="https://www.instagram.com/popnrest/" target="_blank">
                            <img src={logo_instagram} />
                        </a>
                        <a className="social_link" href="https://www.linkedin.com/company/pop-&-rest" target="_blank">
                            <img src={logo_linkedin} />
                        </a>
                        <a className="social_link" href="https://twitter.com/popnrest" target="_blank">
                            <img src={logo_twitter} />
                        </a>    
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;