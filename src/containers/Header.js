import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../components/Menu.js'


class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            //This state property is the handler for the burger menu displayed only in mobile form
            isMenuHidden: false,
            // states available through user: id, first_name, last_name, email
            user: this.props.user,
            logout: this.props.logoutfn,
            optionsArray: [{path:"/companies", legend:"Companies", msg: "Browse the companies in our system" },{path:"/portfolio", legend: "Portfolio", msg: "Browse your portfolio"},{path:"/visualizer", legend: "Stock Visualizer", msg: "Interactive stock information"},{path:"/aboutus", legend:"About Us", msg: "Find out more about this system"},{path:"/", legend: "Logout", msg: null}]
        };
    }
    
    //-----------------------------------------------------
    //Toggles the burger menu on mobile and on click of a menu item
    //-----------------------------------------------------
    toggleMenu = ()=>{
        if (this.state.isMenuHidden){
            this.setState({isMenuHidden:false})
        }else{
            this.setState({isMenuHidden:true})
        }
        document.querySelector('#navBurger').classList.toggle("is-active");
        document.querySelector('.navbar-menu').classList.toggle("is-active");
    }
    
    render(){
        return(
        <nav className="navbar is-primary"> 
            <div className="navbar-brand">
              
                <NavLink className="navbar-item" to={ {pathname: "/home" }}>                   
                        <h1 className="title is-5">Welcome </h1>
                </NavLink>                      
                {/* needed to show the burger menu icon*/}
                <a className="navbar-burger" id="navBurger" onClick={this.toggleMenu}>
                         <span></span>
                         <span></span>
                         <span></span>
                </a>
            </div>
            <Menu />

        </nav>     

        );
    }
}
export default Header;