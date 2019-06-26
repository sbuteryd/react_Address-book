import React, {Component} from 'react'

export default class ListContacts extends  Component{
    render() {
        console.log(this.props.contacts);
        return (
            <div>
                <div>
                    {this.props.contacts.map((contact)=>(
                        <li key={contact.id} className='contact-list-item'>
                            <div className='contact-avatar' style={{backgroundImage:`url(${contact.avatarURL})`}}/>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                            </div>
                            <button onClick={()=>this.props.ondeleteContact(contact)} className='contact-remove'></button>
                        </li>
                    ))}
                </div>
            </div>
        );
    }
}