import React, { Component } from 'react';
import { CodeItems } from './CodeItems';



class CodeCard extends Component {

    render() {
        return (
            <div className='container' style={{height: "500px"}}>
                <div className='row row-cols-3 ' style={{height: "400px"}}>
                    {
                        CodeItems.map((item, index) => {

                            
                    
                            return (

                                <div className='col box h-50 text-center bckImg' style={{height: "200px",  backgroundImage: `url(${item.myBackground})`}} >
                                    <div key={index} >
                                        <a href={item.applink} target="_blank" rel="noreferrer">{item.title}</a>
                                        <a href={item.githublink} target="_blank" rel="noreferrer"><i className="fa-brands fa-github-square fa-2xl px-3"></i></a>
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