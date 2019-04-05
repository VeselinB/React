import React, { Fragment, Component, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn'),
        };
    }

    logOut = () => {
        localStorage.clear();
        this.forceUpdate();


    }
    render() {

        const { isLoggedIn } = this.state;
        let LogInInfo = () => {
            return (
                <span>

                    <li> <Link to="/register"><button className="button">Register</button>   </Link></li>

                    <li> <Link to="/login"><button className="button">LOGIN</button>   </Link></li>
                </span>)
        }
        if (localStorage.getItem("isLoggedIn") === "true") {
            LogInInfo = () => {

                return (<span><ul><li> <Link to="/userCamps"> {localStorage.getItem('userName')}</Link></li><li><Link to="/"><button onClick={this.logOut} class="button">LOGOUT</button></Link></li></ul> </span>)
            }
        }

        return (

            < Fragment >
                <header>

                    <section className="navigation">
                        <p><Link to="/">kids<span>c<i><FontAwesomeIcon icon="futbol" /></i>rner</span></Link></p>
                        <nav>
                            <ul>
                                <li><a href="#">ABOUT US</a></li>
                                <li><Link to="/offering/offerings">OFFERINGS</Link></li>
                                <li><Link to="/camps">CAMPS</Link></li>
                                <li><Link to="/contacts">CONTACT US</Link></li>


                                <li>
                                    <ul>

                                        <li><a rel="noopener noreferrer" href="https://facebook.com" target="_blank"><i><FontAwesomeIcon icon={faFacebook} /></i></a></li>
                                        <li><a rel="noopener noreferrer" href="https://twitter.com/?lang=bg" target="_blank"><i><FontAwesomeIcon icon={faTwitter} /></i></a></li>
                                        <li><a rel="noopener noreferrer" href="https://www.instagram.com/?hl=bg" target="_blank"><i><FontAwesomeIcon icon={faInstagram} /></i></a></li>

                                    </ul>
                                </li>
                                <li>

                                    <LogInInfo />

                                </li>
                            </ul>
                        </nav>
                    </section>
                    {/* */}
                </header>
            </Fragment >)
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() })
        }, 1000)
    }
}


export default Header;