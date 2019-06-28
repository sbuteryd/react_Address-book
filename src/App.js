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
    createContactApi = (values)=>{
        ContactsAPI.create(values).then(values =>{
            this.setState((state)=>({
                contacts:state.contacts.concat([values])
            }))
        })

        console.log(values)
    };
    render() {
        return(
            <div>
                <Route exact path='/' render={()=>(
                    <ListContact
                        contacts={this.state.contacts}
                        onDeleteContact={this.removeContact}
                    />
                )}/>

                <Route path='/create' render={({history})=> (<CreateContact
                        updateContact={values=>{
                            this.createContactApi(values);
                            history.push('/')
                        }}

                    />)
                }/>

            </div>
        )
    }
}


export  default App