import React, {Component} from 'react'


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
        return (
            <div>
                {JSON.stringify(this.state.query)}
                <div className='contact-list'>
                    <input className='search-contacts' value={this.state.query} onChange={(event)=>this.updateInput(event.target.value)} type="text"/>
                </div>
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