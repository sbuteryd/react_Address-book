import React,{Component} from 'react'
import * as  ContactsAPI from './utils/ContactsAPI'
import ListContact from './ListContact'
import CreaeContact from './CreaeContact'

import {Route} from 'react-router-dom'


class App extends Component{
    state = {
        contacts:[]
    };
    componentDidMount() {
        ContactsAPI.getAll().then((contacts)=>{
            this.setState((state)=>({
                contacts
            }))
        })
    }
    clearContact =(contact)=>{
        console.log(contact)
        this.setState((state)=>({
            contacts:state.contacts.filter((c)=> c.id !== contact.id)
        }))
        ContactsAPI.remove(contact)
    }
    getFormDate =(values)=>{
        ContactsAPI.create(values).then((values)=>{
            this.setState((state)=>({
                contacts:state.contacts.concat(values)
            }))
        })
    };

    render() {
        return(
            <div>
                <Route  exact path='/' render={()=>(
                    <ListContact
                        clearContact={this.clearContact}
                        contacts={this.state.contacts} />
                )}>
                </Route>

                <Route path='/create' render={({history})=>(
                    <CreaeContact
                        getFormDate={
                            (values)=> {
                                this.getFormDate(values)
                                history.push('/')
                            }
                        }
                    />
                )}

                />
            </div>
        )
    }
}

export  default App