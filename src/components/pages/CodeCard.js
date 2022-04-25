import React, { Component } from 'react';
import CodeItems from './CodeItems';
import Image from '../assets/images/react.png'



class CodeCard extends Component {

    render() {
        return (
            <div className='container' style={{ height: "500px" }}>
                <div className='row row-cols-3 ' style={{ height: "400px" }}>
                    {
                        CodeItems.map((item, index) => {


                            // console.log(item.myBackground);

                            const backImage = item.myBackground;
                            console.log(backImage);



                            var sectionStyle = {
                                width: "100%",
                                height: "400px",
                                backgroundImage: "url(" + item.myBackground + ")"
                                // backgroundImage: bckImg
                            };

                            return (

                                // <div className='col box h-50 text-center' style={sectionStyle}>
                                <div className='col box h-50 text-center' >

                                    <div key={index} style={sectionStyle} >
                                        <a href={item.applink} target="_blank" rel="noreferrer">{item.title}</a>
                                        <a href={item.githublink} target="_blank" rel="noreferrer"><i className="fa-brands fa-github-square fa-2xl px-3"></i></a>
                                        <img src={item.myBackground} className="logo" alt='' />
                                    </div>

                                </div>

                            )
                        })
                    }


                </div>
            </div>
        )

    }

};

export default CodeCard;