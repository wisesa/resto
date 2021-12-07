import React, {Fragment, useState} from "react";
import {Link,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {login} from '../../actions/auth';

const Landing=({login,isAuthenticated})=>{

    //Redirect if logged in
    if(isAuthenticated){
        return <Redirect to="/menus" />;
    }

    return <Fragment>
            <main id="transcroller-body" className="aos-all" >
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-down">
                            <img src="/img/red-panda.gif" className="img-hero img-fluid animated" alt="" />
                        </div>
                        <div className="col-lg-12 mt-3 d-flex center flex-column justify-content-center" data-aos="fade-up">
                            <h1>Archipelago's</h1>
                            <h2>We are handling the best of Indonesian Cuisine</h2>
                            <div className="d-lg-flex justify-content-center">
                                <a href="/order" className="btn-get-started scrollto">Order Here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="about">
                <div className="container">
                    <div className="section-title">
                        <h2 className="bold">ABOUT US</h2>
                    </div>

                    <div className="row content">
                        <div className="bg-shrimp"></div>
                        <div className="col-lg-6 center-sm container" data-aos="fade-right">
                            <img className="img-subhero" src="https://mighty-reef-58921.herokuapp.com/img/hero_sesa_full.png" />
                        </div>
                        <div className="col-lg-6 left d-flex align-items-center" data-aos="fade-left">
                            <div>
                                <p>
                                    <strong>Archipelago's</strong> was founded at malang by brad wisesa on 2021. <br/>
                                    It all started from his passion with food and cooking.  <br/>
                                    Started from his own house, he tried to do so many attempts to create a pancake <br/>
                                </p>
                                <p>
                                    When he believes that he can implement another dish he tried to create a seafood dish based on many recipes. <br/>
                                    He's addicted to seafood eversince.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="services section-bg sm">
                <div className="container">
                    <div className="section-title">
                        <h2 className="bold">TOP DISHES</h2>
                    </div>

                    <div className="row content d-flex flex-row-reverse">
                        <div className="col-lg-6 center-sm left" data-aos="fade-left">
                            <img className="img-subhero" src="https://mighty-reef-58921.herokuapp.com/img/hero_bapak.png" />
                        </div>
                        <div className="col-lg-6 left-sm d-flex align-items-center">
                        <div className="bg-shrimp z-index-1"></div>
                            <div data-aos="fade-right">
                                <p className="black">
                                    <strong>Archipelago's</strong> provide clean prepare from the scratch. <br/>
                                    We bought the fresh ingredients from our trusted partners.  <br/>
                                    Using sterilized tools to cook our dishes, your satisfy and hygienic food is our concern.
                                </p>
                                <p className="black">
                                    We're working with our family because we have the same passion at cooking since our grandmother.<br/>
                                    For us the most importang things is a taste of the dish itself.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="services section-bg md">
                <div className="container">
                    <div className="section-title">
                        <h2 className="bold">TOP DISHES</h2>
                    </div>

                    <div className="row content">
                        <div className="col-lg-6 left-sm d-flex align-items-center">
                            <div data-aos="fade-right">
                                <p className="black">
                                    <strong>Archipelago's</strong> provide clean prepare from the scratch. <br/>
                                    We bought the fresh ingredients from our trusted partners.  <br/>
                                    Using sterilized tools to cook our dishes, your satisfy and hygienic food is our concern.
                                </p>
                                <p className="black">
                                    We're working with our family because we have the same passion at cooking since our grandmother.<br/>
                                    For us the most importang things is a taste of the dish itself.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 center-sm left" data-aos="fade-left">
                        <div className="bg-shrimp"></div>
                            <img className="img-subhero" src="https://mighty-reef-58921.herokuapp.com/img/hero_bapak.png" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="cta" className="cta">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h3>Catalog Menu</h3>
                            <p>Our catalog menu can be dowloaded here.</p>
                            <a target="_blank" href="http://localhost:1000" className="btn-get-started scrollto">Catalog Menu</a>
                        </div>
                    </div>

                </div>
            </section>

            <section id="team" className="team section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>TEAM</h2>
                        <p>Our team consists of best people on their skills.</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-6">
                            <div className="member d-flex align-items-start" data-aos="fade-up">
                                <div className="pic"><img src="https://mighty-reef-58921.herokuapp.com/img/chef-1.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4>Brad Wisesa</h4>
                                    <span>Service</span>
                                    <p>18 years old amateur homecook from Malang, East java, Indonesia.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="member d-flex align-items-start" data-aos="fade-up">
                                <div className="pic"><img src="https://mighty-reef-58921.herokuapp.com/img/chef-2.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4>Brad Wisesa</h4>
                                    <span>Homecook</span>
                                    <p>18 years old amateur homecook from Malang, East java, Indonesia.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start" data-aos="fade-up">
                                <div className="pic"><img src="https://mighty-reef-58921.herokuapp.com/img/chef-3.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4>Brad Wisesa</h4>
                                    <span>Sous Chef</span>
                                    <p>29 years old sous chef from Malang, East java, Indonesia.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start" data-aos="fade-up">
                                <div className="pic"><img src="https://mighty-reef-58921.herokuapp.com/img/chef-4.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4>Mikhaela Wisesa</h4>
                                    <span>Executive Chef</span>
                                    <p>25 years old executive chef from Malang, East java, Indonesia.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </main>

        <footer id="footer">
            <div className="container footer-bottom clearfix center">
                <div className="copyright">
                    © Copyright 2021 Archipelago's Team All Rights Reserved
                </div>
            </div>
        </footer>

    </Fragment>
}

Landing.propTypes={
    login:propTypes.func.isRequired,
    isAuthenticated:propTypes.bool
};

const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated
});

export default connect(
    mapStateToProps, 
    {login})
    (Landing);