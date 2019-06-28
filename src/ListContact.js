import React from 'react'
import {Link} from 'react-router-dom'
import escapeStringRegexp from 'escape-string-regexp'
import PropType from 'prop-types'
export default class ListContact extends React.Component{
    static  PropType ={
        contacts:PropType.array.isRequired,
        clearContact:PropType.func.isRequired
    }
    state ={
        query:''
    }
    updateInput = (values)=>{
        this.setState(({
            query:values.trim()
        }))
    }
    render() {
        let showContact;
        const match = new RegExp(escapeStringRegexp(this.state.query),'i');
        showContact = this.props.contacts.filter((c)=> match.test(c.name));
        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input className='search-contacts' type="text" placeholder='Search' value={this.state.query} onChange={(event)=>this.updateInput(event.target.value)}/>
                    <Link  to='/create' className='add-contact'/>
                </div>
                <div>
                    {showContact.map((contact)=>(
                        <li key={contact.id} className='contact-list-item'>
                            <div className='contact-avatar' style={{backgroundImage:`url(${contact.avatarURL})`}}/>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                            </div>
                            <button className='contact-remove' onClick={()=>this.props.clearContact(contact)}>remove</button>
                        </li>
                    ))}
                </div>
            </div>
        );
    }
}