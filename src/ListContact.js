import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import escapeStringRegexp from 'escape-string-regexp'

export default class ListContact extends Component{
    state = {
        query:''
    }
    updateQuery =(values)=>{
        this.setState((state)=>({
            query: values
        }))
    }
    render() {
        let showContacts;
        const match = new RegExp(escapeStringRegexp(this.state.query),'i');
        showContacts = this.props.contacts.filter((c)=> match.test(c.name));
        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input className='search-contacts' type="text" placeholder='Search' value={this.state.query} onChange={(event => this.updateQuery(event.target.value) )}/>
                    <Link to='/create' className='add-contact'/>
                </div>
                {this.props.contacts.length !== showContacts.length &&(
                    <div className='showing-contacts'>
                       show know {this.props.contacts.length} total{showContacts.length}
                    </div>
                )}
                <ol className='contact-list'>
                    {showContacts.map((c)=>(
                        <li key={c.id} className='contact-list-item'>
                            <div className='contact-avatar' style={{backgroundImage:`url(${c.avatarURL})`}}/>
                            <div className='contact-details'>
                                <p>{c.name}</p>
                                <p>{c.email}</p>
                            </div>
                            <button className='contact-remove' onClick={()=> this.props.clearContact(c)}>Remove</button>
                        </li>
                    ))}
                </ol>

            </div>
        );
    }
}