import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ImageInput from './ImageInput'

import serializeFrom   from 'form-serialize'


export default class CreateContact extends Component {
    BlockDefault = (e)=> {
        e.preventDefault();
        const values = serializeFrom(e.target,{hash:true});
        if(this.props.updateContact)
            this.props.updateContact(values)


    };


    render() {
        return(
            <div >
               <Link to='/' className='close-create-contact'/>
                <form className='create-contact-form' onSubmit={this.BlockDefault}>
                    <ImageInput className='create-contact-avatar-input' name='avatarURL' maxHeight={64}/>
                    <div className='create-contact-details'>
                        <input type="text" name='name' placeholder="Name"/>
                        <input type="`text`" name='email' placeholder='Email'/>
                        <button>Add contact</button>
                    </div>
                </form>
            </div>
        )
    }
}