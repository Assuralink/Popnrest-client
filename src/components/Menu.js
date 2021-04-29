import React from 'react';
import Profil from './Profil';

import { Link } from 'react-router-dom';

import './Menu.scss';
import logo from '../images/popnrestblack.png';

import { AuthContext } from '../context/auth';

class Menu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        let context = this.context;

        return (
            <nav>   
                <div class="content">
                    <img className="logo_menu" className="logo_menu" src={logo} alt="logo_popnrest" />

                    <Profil />
                    <ul>
                        <li>
                            <Link to="https://medium.com/@popnrest">BLOG</Link> 
                        </li>
                        <li>
                            <Link to="https://popnrest.com/faqs">FAQs</Link>
                        </li>
                        <li>
                            <Link to="https://popnrest.com/property">PROPERTY</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

Menu.contextType = AuthContext;

export default Menu;