import React, {Component} from 'react'
import escapeStringRegexp from 'escape-string-regexp'
import {Link} from 'react-router-dom'

// regularExpression
export default class ListContact extends Component{
    state = {
        query:''
    }
    updateContacts =(contact)=>{
        this.props.onDeleteContact(contact)
    };
    updateInput = (query)=>{
        this.setState(()=>({
            query:query
        }))
    };
    showALl =()=>{
        this.setState(({
            query:''
        }))
    }
    render() {
        let showContactList
        const match = new RegExp(escapeStringRegexp(this.state.query),'i');
        showContactList = this.props.contacts.filter((c)=> match.test(c.name));
        return (
            <div>
                <div className='list-contacts-top'>
                    <input className='search-contacts' value={this.state.query} onChange={(event)=>this.updateInput(event.target.value)} type="text"/>
                    <Link to='/create' className='add-contact' href=""/>

                </div>
                {showContactList.length !== this.props.contacts.length &&(
                    <div className='showing-contacts'>
                        <div>serarch:{showContactList.length } total: {this.props.contacts.length}</div>
                        <button onClick={this.showALl}  >Show all</button>
                    </div>
                )}
                <div className='list-contacts'>
                    {showContactList.map((contact)=>(
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

            </div>
        );
    }
}