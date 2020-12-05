import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from '../components/Layout';

import HomePage from '../pages/HomePage';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';

export default function Router() {

    // const [authenticate, setAuthenticate] = useState(false);
    // const [currentUser, setCurrentUser] = useState(null);
    // const [pageLoading, setPageLoading] = useState(true);

    const [authenticate, setAuthenticate] = useState(true);
    const [currentUser, setCurrentUser] = useState(true);
    const [pageLoading, setPageLoading] = useState(false);

    useEffect(() => {
        setPageLoading(false);
    }, [pageLoading, authenticate])

    const toggleAuthenticated = (auth, currUser) => {
        setAuthenticate(auth);
        setCurrentUser(currUser);
    }

    return (
        <main>
            <Layout>
                <Switch>
                    <Route 
                        exact
                        path = "/"
                        component = {() => (
                            <HomePage/>
                        )}
                    />
                </Switch>
                <Route 
                    exact 
                    path = "/login"
                    component = {(props) => (
                        <SigninPage 
                        toggleAuthenticated = {toggleAuthenticated}
                        {...props}
                        />
                    )}
                />
                <Route 
                    exact 
                    path = "/register"
                    component = {(props) => (
                        <SignupPage {...props} />
                    )}
                />
            </Layout>
        </main>
    )
}