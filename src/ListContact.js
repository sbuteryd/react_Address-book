import React,{Component} from 'react'



export default class ListContact extends Component{
    render() {
        return (
            <div>
                <div className='list-contacts'>
                    {this.props.contacts.map((contact)=>(
                        <li key={contact.id} className='contact-list-item'>
                            <div className='contact-avatar' style={{backgroundImage:`url(${contact.avatarURL})`}}/>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                            </div>
                            <button className='contact-remove'>remove</button>
                        </li>
                    ))}
                </div>
            </div>
        )
    }
}