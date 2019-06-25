import React,{Component} from 'react'
import  * as ContactsAPI from './utils/ContactsAPI'
import  ListContact  from './ListContact'
import {Route}  from 'react-router-dom'
import CreateContact  from './createContact'



class App extends Component{

    state = {
        contacts:[]
    };

    componentDidMount() {
        ContactsAPI.getAll().then(contacts=>{
            this.setState(({
                contacts
            }))
        })
    }
    removeContact = (contact)=>{
        this.setState((state)=>({
            contacts:state.contacts.filter((c) => c.id !==contact.id)
        }))
    }
    render() {
        return(
            <div>
                <Route exact path='/' render={()=>(
                    <ListContact
                        contacts={this.state.contacts}
                        onDeleteContact={this.removeContact}
                    />
                )}/>

                <Route path='/create' render={ ()=>
                    (<CreateContact/>)
                }/>

            </div>
        )
    }
}

export  default App