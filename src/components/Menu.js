import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            //This state property is the handler for the burger menu displayed only in mobile form
            selected:'null',
            isMenuHidden: false,
            // states available through user: id, first_name, last_name, email
            optionsArray: [
                {path:"/companies", legend:"Companies", msg: "Browse the companies in our system" },
                {path:"/portfolio", legend: "Portfolio", msg: "Browse your portfolio"},
                {path:"/visualizer", legend: "Stock Visualizer", msg: "Interactive stock information"},
                {path:"/aboutus", legend:"About Us", msg: "Find out more about this system"}
            ]
        };
        this.setActive = this.setActive.bind(this)

    }
    
    isActive(value){
        return ((value===this.state.selected) ? true : false);
    }
    
    //-----------------------------------------------------
    // sets current menu button to is-active
    //-----------------------------------------------------
    setActive(option) {
        this.setState({selected:option});

    }

    
    

    
    render(){
        return(
            <div className="navbar-end">
                {/* Contracted burger menu at start */}
                <div className="navbar-menu  navbar-dropdown">
                        {/* EACH ELEMENT IS ITERATED FROM THE OPTIONSARRAY */}
                        {this.state.optionsArray.map((option, ind)=>{
                         return (
                             <div key={ind}>
                                 <NavLink className="navbar-item" to={ {pathname: option.path }} onClick={this.toggleMenu} >
                                    <div className="">{option.legend}</div>
                                    <div>{option.msg}</div>
                                 </NavLink>
                                 {option.msg?
                                 <hr className="dropdown-divider"/>:null}
                            </div>
                        )})}
                </div>
                {/* Desktop menu, not visible on mobile*/}
                <div className="is-hidden-touch" id="desktop-menu" >
                    {/* SINCE THERE IS NO MSG OPTION ON LOGOUT IT RENDERS DIFFERENT FUNCTIONS ON CLICK */}
                    <div id="mainMenu" className=" is-right ">
                        <div className="buttons has-addons" role="menu">
                            {this.state.optionsArray.map((option, ind)=>{
                                let classList = "button menu-button";
                                (this.isActive(option.legend)?classList += " is-focused": null)                              
                                return (
                                    <NavLink key={ind} to={option.path} className={classList} onClick={this.setActive.bind(this, option.legend)}>
                                        {option.legend}
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div>&nbsp; &nbsp; </div>
            </div>

        );
    }
}
export default Menu;