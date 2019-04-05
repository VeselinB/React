import React, { Fragment, Component, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faEarlybirds } from '@fortawesome/free-brands-svg-icons'
import { userProvider, defaultUserState } from './components/contexts/user-context'
import Contacts from './components/views/Contacts';
import Header from './components/views/Header';
import Fouter from './components/views/Footer'

library.add(faFutbol, faFacebook, faTwitter, faInstagram)




//import BooksWrapper from './components/views/BooksWrapper';



// const Book = lazy(() => import('./components/views/Book'));
const Home = lazy(() => import('./components/views/Home'));
const Login = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Register'));
const Camp = lazy(() => import('./components/views/Camp'));
const Offerings = lazy(() => import('./components/views/Offerings'));
const Offering = lazy(() => import('./components/views/Offering'));
const Camps = lazy(() => import('./components/views/Camps'));
const UserCamps = lazy(() => import('./components/views/UserCamps'));
const AddCamp = lazy(() => import('./components/AddCamp'));
const EditCamp = lazy(() => import('./components/EditCamp'));
const EditOffering = lazy(() => import('./components/EditOffering'));


const WrappedContacts = () => {
    const style = {

        position: 'relative',

    }
    return (
        <div>
            <Contacts style={style} />
        </div>
    )
}


// const About = lazy(() => import('./components/views/About'));
// const NotFound = lazy(() => import('./components/views/NotFound'));
// const EditCamp = lazy(() => import('./components/views/Edit'));






class AppWrapper extends Component {
    state = {
        isLoggedIn: !!localStorage.getItem('isLoggedIn'),
    }

    updateUser = (user) => {
        this.setState({ defaultUserState })
    }
    render() {
        const { defaultUserState } = this.state;
        const { isLoggedIn } = this.props;
        return (
            <Fragment>
                <Router>
                    <Fragment>



                        <Suspense fallback={<div>Loading...</div>}>
                            <Header isLoggedIn={isLoggedIn} />
                            <Switch>

                                <Route path="/" component={() => <Home history={this.props.history} />} exact />

                                <Route path="/camps" component={Camps} exact />
                                <Route path="/login" component={Login} exact />
                                <Route path="/register" component={Register} exact />
                                <Route path="/camp/:id" component={Camp} exact />
                                <Route path="/offering/offerings" component={Offerings} exact />
                                <Route path="/offering/:id" component={Offering} exact />
                                <Route path="/userCamps" component={UserCamps} exact />
                                <Route path="/add" component={AddCamp} exact />
                                <Route path="/edit/:id" component={EditCamp} exact />
                                <Route path="/contacts" component={WrappedContacts} exact />
                                <Route path="/editOffering/:id" component={EditOffering} exact />

                                {/* <Route path={`/camps/:id`} component={Book} exact /> */}


                            </Switch>
                            <Fouter />
                        </Suspense>



                    </Fragment>
                </Router>
            </Fragment>
        )
    }

    // componentDidUpdate(prevProps) {
    //     // Typical usage (don't forget to compare props):
    //     if (!!localStorage.getItem('isLoggedIn') !== prevProps.isLoggedIn) {
    //         this.setState(
    //             {
    //                 isLoggedIn: true,
    //             }
    //         );
    //     }
    // }
}

ReactDOM.render(
    <AppWrapper />,
    document.getElementById('root'));

