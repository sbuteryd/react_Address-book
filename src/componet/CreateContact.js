import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ImageInput from '../ImageInput'
import serialize  from 'form-serialize'
//form-serialize
export default class CreateContact extends Component{
    BlockDefault = (e)=>{
        e.preventDefault();
       const values =  serialize(e.target,{hash:true});

    }
    render() {
        return (
            <div>
                <Link className='close-create-contact' to='/'/>
                <form className='create-contact-form' action="" onSubmit={(e)=>this.BlockDefault(e)}>
                    <ImageInput className='create-contact-avatar-input' name='avatarURL'>avatar</ImageInput>
                    <div className='create-contact-details'>
                        <input type="text" name='name' placeholder='Name'/>
                        <input type="text" name='email' placeholder='Email'/>
                        <button>Add contact</button>
                    </div>
                </form>
            </div>
        );
    }
}