import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./components/About";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

ReactDOM.render(
    <Router>
        <React.Fragment>
            <div className="nav-bar">
                <NavLink
                    activeClassName="active-nav-link"
                    exact
                    to="/"
                >
                    About
                </NavLink>
                <NavLink
                    activeClassName="active-nav-link"
                    to="/test"
                >
                    Take Test
                </NavLink>
                <a
                    activeClassName="active-nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.cdc.gov/violenceprevention/acestudy/index.html"
                >
                    {" "}
                    More Info(CDC Link)
                </a>
            </div>
            <Route path="/test" render={props => <App {...props} />} />
            <Route exact path="/" render={props => <About {...props} />} />
            <div className="bottom">
                The Content is not intended to be a substitute for professional
                medical advice, diagnosis, or treatment. Always seek the advice
                of your physician or other qualified health provider with any
                questions you may have regarding a medical condition. Never
                disregard professional medical advice or delay in seeking it
                because of something you have read on this site! If you think
                you may have a medical emergency, call your doctor or 911
                immediately.
            </div>
        </React.Fragment>
    </Router>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
