import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from '../components/Layout';

import HomePage from '../pages/HomePage';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';

import { __CheckSession } from '../services/UserServices'

export default function Router(props) {

    // const [authenticate, setAuthenticate] = useState(false);
    // const [currentUser, setCurrentUser] = useState(null);
    // const [pageLoading, setPageLoading] = useState(true);

    const [authenticate, setAuthenticate] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const [pageLoading, setPageLoading] = useState(false);

    useEffect(() => {
        verifyTokenValid();
        setPageLoading(false);
    }, [pageLoading, authenticate])

    const toggleAuthenticated = (value, user, done) => {
        setAuthenticate(value);
        setCurrentUser(user);
        done();
    }

    const verifyTokenValid = async () => {
        const token = localStorage.getItem('token')
        if (token) {
          try {
            const session = await __CheckSession()
            setCurrentUser(session.user)
            setAuthenticate(true)
            props.history.push('/')
          } catch (error) {
            setCurrentUser(null)
            setAuthenticate(false)
            localStorage.clear()
          }
        }
    }

    return (
        <main>
                <Switch>
                    <Route 
                        exact
                        path = "/"
                        component = {() => (
                            <Layout>
                               <HomePage/> 
                            </Layout>
                        )}
                    />
                </Switch>
                <Route 
                    exact 
                    path = "/login"
                    component = {(props) => (
                        <Layout>
                            <SigninPage 
                                toggleAuthenticated = {toggleAuthenticated}
                                {...props}
                            />
                        </Layout>
                    )}
                />
                <Route 
                    exact 
                    path = "/register"
                    component = {(props) => (
                        <Layout>
                           <SignupPage {...props} /> 
                        </Layout>
                    )}
                />
        </main>
    )
}