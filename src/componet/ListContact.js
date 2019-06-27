import React, {Component} from 'react'


export default class ListContact extends Component{
    updateContacts =(contact)=>{
        this.props.onDeleteContact(contact)
    };
    render() {
        return (
            <div>
                {this.props.contacts.map((contact)=>(
                    <li className='contact-list-item' key={contact.id}>
                        <div className='contact-avatar' style={{backgroundImage:`url(${contact.avatarURL})`}} />
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.email}</p>
                        </div>
                        <button onClick={()=>this.updateContacts(contact)} className='contact-remove'>remove</button>

                    </li>
                ))}
            </div>
        );
    }
}