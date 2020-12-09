import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import Sidebar from '../components/Sidebar'

import HomePage from '../pages/HomePage';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';
import Profile from '../pages/Profile'
import CreatePost from '../pages/CreatePost';
import ManagePosts from '../pages/ManagePosts';
import CreateCategory from '../pages/CreateCategory'

import { __CheckSession } from '../services/UserServices'

export default function Router(props) {

    const [authenticate, setAuthenticate] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        verifyTokenValid();
        setPageLoading(false);
    }, [pageLoading, authenticate])

    const toggleAuthenticated = (value, user, done) => {
        setAuthenticate(value);
        setCurrentUser(user.data.user);
        done();
    }

    const verifyTokenValid = async () => {
        const token = localStorage.getItem('token')
        if (token) {
          try {
            const session = await __CheckSession(token)
            setCurrentUser(session.user)
            setAuthenticate(true)
          } catch (error) {
            setCurrentUser(null)
            setAuthenticate(false)
            localStorage.clear()
          }
        }
    }
    return (

                <Switch>  
                    <Route 
                        exact
                        path = "/"
                        component = {(props) => (
                            <Layout>
                                <HomePage/> 
                            </Layout>
                        )}
                    />
                    <Route 
                        exact 
                        path = "/login"
                        component = {(props) => (
                            <Layout
                                {...props}
                            >
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
                    <ProtectedRoute 
                        authenticated={authenticate}
                        exact 
                        path = "/profile"
                        component = {(props) => (
                            <Layout
                                currentUser={currentUser}
                                authenticate={authenticate}
                            >
                                <Sidebar collapsed={false} {...props}/>
                                <Profile />
                            </Layout>
                        )}
                    />
                    <ProtectedRoute 
                        authenticated={authenticate}
                        exact 
                        path = "/profile/createpost"
                        component = {(props) => (
                            <Layout
                                currentUser={currentUser}
                                authenticate={authenticate}
                            >
                                <Sidebar collapsed={false} {...props}/>
                                <CreatePost 
                                    currentUser = {currentUser}
                                    {...props}
                                />
                            </Layout>
                        )}
                    />
                    <ProtectedRoute 
                        authenticated={authenticate}
                        exact 
                        path = "/profile/manage"
                        component = {(props) => (
                            <Layout
                                currentUser={currentUser}
                                authenticate={authenticate}
                            >
                                <Sidebar collapsed={false} {...props}/>
                                <ManagePosts
                                    currentUser = {currentUser}
                                    {...props}
                                />
                            </Layout>
                        )}
                    />
                    <ProtectedRoute 
                        authenticated={authenticate}
                        exact 
                        path = "/profile/createcategory"
                        component = {(props) => (
                            <Layout
                                currentUser={currentUser}
                                authenticate={authenticate}
                            >
                                <Sidebar collapsed={false} {...props}/>
                                <CreateCategory
                                    {...props}
                                />
                            </Layout>
                        )}
                    />
                </Switch>
    )
}