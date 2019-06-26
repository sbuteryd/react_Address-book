import React,{Component} from 'react'
import ListContacts from './ListContacts'
import {Route} from 'react-router-dom'
import * as  ContactsAPI from './utils/ContactsAPI'
import CreateContacts from './CreateContacts'


class App extends Component{
    state = {
        contacts:[]
    };
    componentDidMount() {
        ContactsAPI.getAll().then(contacts=>{
            this.setState({
                contacts
            })
        })
    }

    removeContact =(contact)=>{
        this.setState((state)=>({
            contacts:state.contacts.filter((c)=> c.id !==contact.id)
        }))
        ContactsAPI.remove(contact)
    }
    updateContact  = (contactNew)=> {
        console.log(contactNew)
        ContactsAPI.create(contactNew).then(contactNew => {
            this.setState(state=>({
                contacts:state.contacts.concat([contactNew])
            }))
        })
    }

    render() {

        return(
            <div>
                <Route exact path='/' render={()=>
                    <ListContacts
                        contacts ={this.state.contacts}
                        ondeleteContact = {this.removeContact}
                    />
                }/>

                <Route path='/create' render={({history})=>(
                        <CreateContacts
                            getForm ={ (contactNew)=>{
                                this.updateContact(contactNew)
                                history.push('/')
                            }}

                        />
                    )

                }/>
            </div>
        )
    }
}

export  default App