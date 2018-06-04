import React, { Component } from 'react';
// import axios from 'axios';
//import { NavLink } from 'react-router-dom';
//import { Route, Switch  } from 'react-router-dom';

class LeftAside extends Component {
   constructor(props){
        super(props);
        this.state={
            
        };
    }
     
    render(){
        return(
            <div className="left-aside is-secondary">
                <div className="tabs is-boxed is-fullwidth">
                  <ul>
                    <li className="is-active">
                      <a>
                        <span className="icon is-small"><i className="fas fa-plus" aria-hidden="true"></i></span>
                        <span>Explore</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="icon is-small"><i className="fas fa-cog" aria-hidden="true"></i></span>
                        <span>Settings</span>
                      </a>
                    </li>
                </ul>
                </div>
                <section className="section">
                
                <aside className="menu">
                    <p className="menu-label">
                        General
                    </p>
                    <ul className="menu-list">
                        <li><a>Dashboard</a></li>
                        <li><a>Settings</a></li>
                    </ul>
                    <p className="menu-label">
                    Administration
                  </p>
                  <ul className="menu-list">
                    <li><a>Team Settings</a></li>
                    <li>
                      <a className="is-active">Manage Your Team</a>
                      <ul>
                        <li><a>Members</a></li>
                        <li><a>Plugins</a></li>
                        <li><a>Add a member</a></li>
                      </ul>
                    </li>
                    <li><a>Invitations</a></li>
                    <li><a>Cloud Storage Environment Settings</a></li>
                    <li><a>Authentication</a></li>
                  </ul>
                  <p className="menu-label">
                    Transactions
                  </p>
                  <ul className="menu-list">
                    <li><a>Payments</a></li>
                    <li><a>Transfers</a></li>
                    <li><a>Balance</a></li>
                  </ul>
                </aside>
            </section>
            </div>

        );
    }
}
export default LeftAside;