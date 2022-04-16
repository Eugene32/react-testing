import React from 'react';



const Works = () => {

    

    return (
        <div>
            <section id="works" class="columns section ">
                <aside class="column is-one-fifth-tablet level">
                    <span class="title is-1 level-right">Works</span>

                </aside>
                <div class="column">

                    <div class="container box my-background ">
                        <h3 class="text-white bg-dark px-4 rounded text-center" >Projects</h3>
                        <div id="carouselExampleIndicators" class="carousel slide h-50" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="0" class="active" aria-current="true"
                                    aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="1" aria-label="Slide 2"></button>

                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active ">
                                    <a href="https://eugene32.github.io/Travel-Application/"
                                        target="_blank" rel="noreferrer"><img src="../assets/images/Travel-App-demo.png"
                                            class="d-block w-100 " alt="Travel-App_pic"></img></a>
                                </div>
                                <div class="carousel-item ">
                                    <a href="https://stormy-anchorage-52853.herokuapp.com/" target="_blank" rel="noreferrer">
                                        <img src="../assets/images/Find-A-Pet.png" class="d-block w-100"
                                            alt="Find-A-Pet_pic"></img></a>
                                </div>

                            </div>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div class="container columns is-align-content-space-between ">
                        <div class="column">

                            <div style={{height: "200px"}} class="container box my-g1-s1 text-center ">
                                <ul>
                                    <li>
                                        <h3>
                                            <a href="https://eugene32.github.io/Web-DevOp-Quiz/" target="blank"
                                                class="text-white bg-dark px-4 rounded">Web-DevOp-Quiz</a>
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            <a href="https://eugene32.github.io/Password-Generator/"
                                                target="blank"
                                                class="text-white bg-dark px-2 rounded">Password-Generator</a>
                                        </h3>
                                    </li>
                                    <li>

                                    </li>

                                </ul>

                            </div>

                            <div style={{height: "200px"}} class="container box my-g1-s2 text-center">
                                <ul>
                                    <li>
                                        <h3><a href="https://github.com/Eugene32/Employee-Tracker"
                                            target="blank"
                                            class="text-white bg-dark px-2 rounded">Employee-Tracker</a>
                                        </h3>
                                    </li>
                                    <li>
                                        <h3><a href="https://github.com/Eugene32/ECommerce-Back-End"
                                            target="blank"
                                            class="text-white bg-dark px-2 rounded">ECommerce-Back-End</a>
                                        </h3>
                                    </li>
                                    <li>
                                        {/* <h3><a href=""></a></h3> */}
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div class="column">

                            <div style={{height: "200px"}} class="container box my-g2-s1 text-center">

                            </div>
                            <div style={{height: "200px"}} class="container box  my-g2-s2 text-center">
                                <ul>
                                    <li>
                                        <h3>
                                            <a href="https://eugene32.github.io/Weather-Dashboard/"
                                                target="blank"
                                                class="text-white bg-dark px-2 rounded">Weather-Dashboard</a>
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            {/* <a href=""></a> */}
                                        </h3>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

            </section >


        </div >
    );




};

export default Works;