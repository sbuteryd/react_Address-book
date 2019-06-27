import React,{Component} from 'react'
import * as ContactsAPI from './utils/ContactsAPI'
import ListContact from './componet/ListContact'
import  {Route} from 'react-router-dom'
import  CreateContact from './componet/CreateContact'


class App extends Component{
    state ={
        contactsList:[]
    };
    componentDidMount() {
        ContactsAPI.getAll().then((contacts)=>{
            this.setState(({contactsList: contacts}))
        })
    }
    clearContact =(contact)=>{
        this.setState((state)=>({
            contactsList:state.contactsList.filter((c)=> c.id !== contact.id)
        }))
    };
    render() {
        return(
            <div>
                <Route exact path='/' render={()=>(
                    <ListContact
                    onDeleteContact={this.clearContact}
                    contacts={this.state.contactsList} />
                )} />
                <Route path='/create' render={()=>(
                    <CreateContact
                    />
                )}
                />

            </div>
        )
    }
}

export  default App