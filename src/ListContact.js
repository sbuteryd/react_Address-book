import React,{Component} from 'react'


export default class ListContact extends Component{

    state = {
        query:''
    };

    updateContact=(contact) => {
        this.setState({
            query:contact
        })
    };

    render() {
        return (
            <div>
                <div className='list-contacts-top'>
                    <input className='search-contacts' type="text" value={this.state.query} onChange={(event => this.updateContact(event.target.value))}/>
                </div>
                <div className='list-contacts'>
                    {this.props.contacts.map((contact)=>(
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