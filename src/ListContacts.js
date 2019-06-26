import React, {Component} from 'react'
// escape-string-RegularExpression
import escapeRegexp from 'escape-string-regexp'
import sortBy from 'sort-by'
export default class ListContacts extends  Component{
    state ={
        query:''
    }

    updateSearch =(values)=>{
       this.setState({
           query:values
       })
    }
    clearQuery = ()=>{
        console.log('russell')
        this.setState({
            query:''
        })
    }
    render() {
        let showContacts;
        if(this.state.query){
            const match = new RegExp(escapeRegexp(this.state.query),'i');
            showContacts = this.props.contacts.filter(c=> match.test(c.name))
        }else {
            showContacts = this.props.contacts
        }
        return (
            <div>
                <div>
                    <input value={this.state.query} onChange={(e)=>this.updateSearch(e.target.value)} className='search-contacts' type="text"/>
                </div>
                {this.props.contacts.length !== showContacts.length &&(
                    <div className='showing-contacts'>
                        <p> Showing:{showContacts.length} total: {this.props.contacts.length} </p>
                        <button onClick={this.clearQuery}>Show all</button>
                    </div>

                )}
                <div className='contact-list'>
                    {showContacts.map((contact)=>(
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