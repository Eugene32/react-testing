import React, { Component } from 'react';
import { CodeItems } from './CodeItems';


class CodeCard extends Component {

    render() {
        return (
            <div className='grid'>
                {CodeItems.map((item, index) => {
                    return (
                        <div key={index} className='g-col-6 card'>
                            <a href={item.applink} target="_blank" rel="noreferrer">{item.title}</a>
                            <a href={item.githublink} target="_blank" rel="noreferrer"><i className="fa-brands fa-github-square fa-2xl px-3"></i></a>
                        </div>
                    )
                })}

            </div>
        )

    }

};

export default CodeCard;