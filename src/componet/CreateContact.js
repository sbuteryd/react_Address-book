import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class CreateContact extends Component{
    render() {
        return (
            <div>
                <Link className='close-create-contact' to='/'/>
                hello world
            </div>
        );
    }
}