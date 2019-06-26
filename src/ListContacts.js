import React, {Component} from 'react'

export default class ListContacts extends  Component{
    state ={
        query:''
    }

    updateSearch =(values)=>{
       this.setState({
           query:values
       })
    }
    render() {
        return (
            <div>
                <div>
                    <input value={this.state.query} onChange={(e)=>this.updateSearch(e.target.value)} className='search-contacts' type="text"/>
                </div>
                <div className='contact-list'>
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