import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            //This state property is the handler for the burger menu displayed only in mobile form
            showMenu: false,
      };
    }
    
    
    render(){
        return(
            <div className="footer">
                <nav className="navbar is-fixed-bottom is-info">
                  <div className="container is-info">
                  <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                      <p className="title">Footer goes here</p>
                    </a>
                
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                    </a>
                  </div>
                  
                  
                    <div id="" className="navbar-menu">
                        <div className="navbar-start">
                          <a className="navbar-item" href="https://bulma.io/">
                            Home
                          </a>
                          <div className="navbar-item has-dropdown-up is-hoverable">
                            <a className="navbar-link" href="/documentation/overview/start/">
                              Docs
                            </a>
                            <div className="navbar-dropdown is-boxed">
                              <a className="navbar-item" href="/documentation/overview/start/">
                                Overview
                              </a>
                              <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                                Modifiers
                              </a>
                              <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                                Columns
                              </a>
                              <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                                Layout
                              </a>
                              <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
                                Form
                              </a>
                              <hr className="navbar-divider" />
                              <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
                                Elements
                              </a>
                              <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                                Components
                              </a>
                            </div>
                          </div>
                        </div>
                        
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="field is-grouped">
                                  <p className="control">
                                    <a className="button is-primary" href="#">
                                      <span className="icon">
                                        <i className="fas fa-download"></i>
                                      </span>
                                      <span>Download</span>
                                    </a>
                                  </p>
                                  <p className="control">
                                    <input className="input is-primary" type="text" placeholder="Search"/>
                                  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
                </nav>
            </div>
        );
    }
}
export default Header;