import React,{Component} from 'react'
import * as ContactsAPI from  './utils/ContactsAPI'
import {Route} from 'react-router-dom'

import ListContact from './ListContact'
import  CreateList from './createList'

export default class App extends Component{
    state ={
        contacts:[]
    }
    componentDidMount() {
        ContactsAPI.getAll().then((contacts)=>{
            this.setState(({
                contacts
            }))
        })
    }
    clearContact = (values)=>{
        this.setState((state)=>({
            contacts:state.contacts.filter((c)=> c.id !==values.id)
        }))
        ContactsAPI.remove(values)
    }
    createConact=(value)=>{
        ContactsAPI.create(value).then((contacts)=>{
            this.setState((state)=>({
                contacts:state.contacts.concat([contacts])
            }))
        })
    }
    render() {
        return(
            <div>
                <Route exact path='/' render={()=>(
                    <ListContact
                        clearContact={this.clearContact}
                        contacts={this.state.contacts}
                    />
                )}/>

                <Route path='/create' render={({history})=>(
                    <CreateList
                        createConact={
                            (createConact)=>{
                                this.createConact(createConact)
                                history.push('/')
                            }
                        }
                    />
                )}/>

            </div>
        )
    }
}
