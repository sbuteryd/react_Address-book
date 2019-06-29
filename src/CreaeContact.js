import React,{Component} from 'react'
import  {Link} from 'react-router-dom'
import serialize from 'form-serialize'
import ImageInput  from './ImageInput'


export default class CreaeContact extends Component{
    DefaultEvent = (event)=>{
        event.preventDefault();
        const values = serialize(event.target,{hash:true});
        console.log(values)
        if(this.props.getFormDate)
            this.props.getFormDate(values)
    }
    render() {
        return (
            <div>
                <Link className='close-create-contact' to='/'/>
                <form className='create-contact-form' action=""  onSubmit={(event)=>this.DefaultEvent(event)}>
                    <ImageInput className='create-contact-avatar-input' name='avatarURL' maxHeight={64}/>
                    <div className='create-contact-details'  >
                        <input type="text" placeholder='name' name='name'/>
                        <input type="text" placeholder='email' name ='email'/>
                        <button>Add contact</button>
                    </div>
                </form>
            </div>
        );
    }
}