import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'

export default class CreateContacts extends Component{
    getFormDate = (e)=>{
        e.preventDefault()
        let valuse = serializeForm(e.target,{hash:true})
        if(this.props.getForm)
            this.props.getForm(valuse)

    }
    render() {
        return (
            <div>
                <Link className='close-create-contact' to='/'>LInk</Link>
                <form action="" className='create-contact-form' onSubmit={this.getFormDate}>
                    <ImageInput className='create-contact-avatar-input' name='avatarURL'>avatarURL</ImageInput>
                    <div className='create-contact-details'>
                        <input type="text" name='name' placeholder='Name'/>
                        <input type="text" name='email'placeholder='Email'/>
                        <button>Add contacts</button>
                    </div>
                </form>
            </div>
        );
    }
}