import React from 'react';
import Avatar from '../components/assets/images/Photo 1.JPG'


const AboutMe = () => {

    return (
        <div>
            <section id="about-me" className="section columns">

                <aside className="column is-one-fifth-tablet level ">
                    <span className='title is-1 level-right'>About Me</span>

                </aside>
                <div
                    className="columns is-variable is-3 is-centered is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd ">
                    <div className="column box is-one-third-tablet card my-card-height ">
                        <img src={Avatar} alt="Avator" />
                    </div>

                    <div className="column box is-one-third-tablet card my-card-height ">
                        <a href="./assets/docs/cv-Reynan Kanindot.doc"> <img className="is-2"
                            src="../assets/images/CV-Pic.png" alt="cv-pic"></img></a>

                    </div>
                </div>
            </section>
        </div>
    )
};

export default AboutMe;