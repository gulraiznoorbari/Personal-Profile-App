import React from 'react';
import './profile.css';
import Introduction from './introduction';
import Education from './education';
import Experience from './experience';
import Contact from './contact';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default function Profile() {
    return (
        <Router>
            <div id="container">

                <header>
                    <div className="quoteoftheday">Profile</div>
                    <div className="name">Gulraiz.</div>
                </header>

                <article>
                    <div className="quote">
                        <h1>The best error message is the one that never shows up.</h1>
                    </div>
                    <div className="quoteby">
                        <h4>Gulraiz Noor Bari</h4>
                    </div>
                </article>

                <footer>

                    <div className="skills">
                        <h6>Menu</h6>
                        <ul>
                            <li><Link to='/'>Introduction</Link></li>
                            <li><Link to='/education'>Education</Link></li>
                            <li><Link to='/experience'>Professional Experience</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>

                    <Switch>
                        <Route exact path="/">
                            <Introduction/>
                        </Route>
                        <Route exact path="/education">
                            <Education/>
                        </Route>
                        <Route exact path="/experience">
                            <Experience/>
                        </Route>
                        <Route exact path="/contact">
                            <Contact/>
                        </Route>
                    </Switch>

                </footer>
                
            </div>
        </Router>
    )
}

