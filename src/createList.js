import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import ImageInput from './ImageInput'
import serialize from  'form-serialize'

export default class CreateList extends React.Component{
    DefaultBehavior = (event)=>{
        event.preventDefault()
        const values =  serialize(event.target,{hash:true});
        console.log(values)
        if(this.props.createConact)
            this.props.createConact(values)


    }
    render() {
        return (
            <div>
                <Link to='/' className='close-create-contact' />
                <form action="" className='create-contact-form' onSubmit={(event)=>this.DefaultBehavior(event)}>
                    <ImageInput className='create-contact-avatar-input' name='avatarURL'/>
                    <div className='create-contact-details'>
                        <input type="text" name='name'/>
                        <input type="text" name='email'/>
                        <button>add contact</button>
                    </div>
                </form>
            </div>
        );
    }
}