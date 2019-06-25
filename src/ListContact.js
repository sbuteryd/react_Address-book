import React,{Component} from 'react'
import  Regexp from  'escape-string-regexp'
import {Link}  from 'react-router-dom'

export default class ListContact extends Component{

    state = {
        query:''
    };

    updateContact=(contact) => {
        this.setState({
            query:contact
        })
    };

    clearContact = ()=>{
        this.setState({
            query:''
        })
    }

    render() {

        let showListContact;
        if(this.state.query){
            const match = new RegExp(escape(this.state.query),'i') ;
            showListContact = this.props.contacts.filter((c)=> match.test(c.name))

        }else {
            showListContact = this.props.contacts
        }
        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input className='search-contacts' type="text" value={this.state.query} onChange={(event => this.updateContact(event.target.value))}/>
                    <Link  to='/create' className='add-contact'>contact</Link>
                </div>

                {showListContact.length !== this.props.contacts.length &&(
                    <div className='showing-contacts'>
                        <span>Showing {showListContact.length} of {this.props.contacts.length} total</span>
                        <button onClick={this.clearContact}>show all</button>
                    </div>
                )}

                <div className='list-contacts'>
                    {showListContact.map((contact)=>(

                        <li key={contact.id} className='contact-list-item'>
                            <div className='contact-avatar' style={{backgroundImage:`url(${contact.avatarURL})`}}/>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                            </div>
                            <button onClick={()=>this.props.onDeleteContact(contact)} className='contact-remove'>remove</button>
                        </li>

                    ))}
                </div>
            </div>
        )
    }
}