import React, {Component} from 'react'
import escapeStringRegexp from 'escape-string-regexp'

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
    render() {
        let showContactList
        const match = new RegExp(this.state.query,'i');
        showContactList = this.props.contacts.filter((c)=> match.test(c.name));
        console.log('showContactList',showContactList);
        return (
            <div>
                <div className='contact-list'>
                    <input className='search-contacts' value={this.state.query} onChange={(event)=>this.updateInput(event.target.value)} type="text"/>
                </div>
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
        );
    }
}