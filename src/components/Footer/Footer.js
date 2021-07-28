import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare, faInstagramSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div className="mt-5">
            <footer class="bg-dark text-center text-white">
                <div class="container p-4">
                    <section class="mb-4">
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faYoutubeSquare} />
                        </a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faTwitterSquare} />
                        </a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faFacebookSquare} />
                        </a>
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        >
                                <FontAwesomeIcon icon={faInstagramSquare} />
                        </a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faFacebookSquare} /></a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        >   <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </section>
                    <section class="">
                        <form action="">
                            <div class="row d-flex justify-content-center">
                                <div class="col-auto">
                                    <p class="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div class="col-md-5 col-12">
                                    <div class="form-outline form-white mb-4">
                                        <input type="email" id="form5Example2" class="form-control" />
                                        <label class="form-label" for="form5Example2">Email address</label>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <button type="submit" class="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                    <section class="mb-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                            eum harum corrupti dicta, aliquam sequi voluptate quas.
                        </p>
                    </section>
                    <section class="">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Links</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Links</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Links</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Links</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2020 Copyright:
                    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>

        </div>
    );
};

export default Footer;