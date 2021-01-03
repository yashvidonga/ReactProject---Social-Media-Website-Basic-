import React, { Component } from 'react'
import './Posts.css';
import pic from '../assets/p1.png';

export default class Posts extends Component {
    render() {
        var {post, created} = this.props.post;
        return (
            <div className='posts'>
                <div className='jss58'>
                    <div className='jss215'>
                        <div className='jss216'>
                            <div className='jss146'>
                                <img className='jss148'
                                src={pic} alt='img'/>
                            </div>
                        </div>
                        <div className='jss218'>
                            <span className="jss105 jss113 jss219">
                                {localStorage.getItem('email')}
                            </span>
                            <span className='jss105 jss113 jss127'>
                               {created}
                            </span>
                        </div>
                    </div>
                    <div>
                    <p className='post'>{post}</p>
                    </div>
                </div>
               
            </div>
        )
    }
}
