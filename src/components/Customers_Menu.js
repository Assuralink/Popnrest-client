import React, { useState } from 'react';
import { MenuRounded, MenuOpenRounded } from '@material-ui/icons';

class Customers_Menu extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            toogle: false
        }
    }
    


    render(){
        return (
            <div class="Customer_Menu">
                { this.state.toogle == true ? 
                    <MenuOpenRounded classes={{ root: 'toogleCustomersMenu_icon' }} onClick={() => this.setState({ toogle: false })} />
                    :
                    <MenuRounded classes={{ root: 'toogleCustomersMenu_icon' }} onClick={() => this.setState({ toogle: true })} />
                }
            </div>
        )
    }
    
}

export default Customers_Menu;