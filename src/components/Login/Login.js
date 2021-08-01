import React, { useState } from 'react';
import avatar from '../../img/avatar.png';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}
const Login = () => {
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignedIn: false,
        // newUser: false,
        name: '',
        email: '',
        password: '',
        phone: '',
    })
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser)
                // setLoggedInUser(signedInUser)
                // history.replace(from);
                console.log(displayName, email, photoURL);
            })
            // console.log('sign in clicked');
            .catch(error => {
                console.log(error);
                console.log(error.message);

            })
    }

    // const handleGoogleSignOut = () => {
    //     firebase.auth().signOut()
    //         .then(() => {
    //             const signOutUser = {
    //                 isSignedIn: false,
    //                 name: '',
    //                 photo: '',
    //                 email: '',
    //                 error: '',
    //                 success: false
    //             }
    //             setUser(signOutUser)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             console.log(err.message);
    //         })
    // }

    const handleBlur = (e) => {
        console.log(e.target.name, e.target.value);
        let isFormedValid = true;
        if (e.target.name === 'email') {
            isFormedValid = /\S+@\S+\S+/.test(e.target.value);
            // const isEmailValid = /\S+@\S+\S+/.test(e.target.value);
            // console.log(isEmailValid);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFormedValid = isPasswordValid && passwordHasNumber;
            // console.log(isPasswordValid && passwordHasNumber);
        }
        if (isFormedValid) {
            // debugger;
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    // setLoggedInUser(newUserInfo);
                    // history.replace(from);
                    console.log(res)

                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    //   var errorCode = error.code;
                    //   var errorMessage = error.message;
                    //  console.log(errorCode, errorMessage);
                });

        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    console.log(res)
                    // console.log(res);

                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                });
        }
        e.preventDefault();
    }

    return (
        <section className="section-header">
            <div class="loginbox ">
                <img src={avatar} class="avatar" />
                {/* <h1 className="login-title">Login Here</h1> */}
                <div className="text-center social-btn">
                    <button onClick={handleGoogleSignIn}> <FontAwesomeIcon className="google-icon" icon={faGoogle} size="lg" /> Continue With Google</button><br />
                </div>
                {/* <hr /> */}
                <h5 className="text-center mt-3 text-or">Or</h5>
                <form>
                   {
                       newUser &&  <input type="text" name="" placeholder="Enter your name" onBlur={handleBlur} required />
                   }
                    <input type="text" name="" placeholder="Enter Email" onBlur={handleBlur} required />
                    <input type="password" name="" placeholder="Enter Password" onBlur={handleBlur} required />
                    <input type="submit" name="" value={newUser ? "Sign Up" : "Login"} onSubmit={handleSubmit}/>
                    {/* <div className="link-text text-center">
                        <a href="#">Forget password?</a>
                        {" "}
                        <a href="#">Don't have an account?</a>
                    </div> */}

                    <div className="a mt-3 text-center text-logSign">
                        {
                            newUser ? 'already have an account?'  : "Don't have an account? "
                        }

                        <span onClick={() => setNewUser(!newUser)} style={{ cursor: 'pointer' }}>
                            {
                                newUser ? 'login' : 'sign up'
                            }
                        </span>

                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;