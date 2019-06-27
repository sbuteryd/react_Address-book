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
    addContact =(values)=> {
        ContactsAPI.create(values).then(()=>{
            this.setState((state)=>({
                contactsList:state.contactsList.concat(values)
            }))
        })

    }


    render() {
        return(
            <div>
                <Route exact path='/' render={()=>(
                    <ListContact
                    onDeleteContact={this.clearContact}
                    contacts={this.state.contactsList} />
                )} />
                <Route path='/create' render={({history})=>(
                    <CreateContact
                        addContact={(contacts)=> {this.addContact(contacts)
                            history.push('/')}
                        }
                    />
                )}
                />

            </div>
        )
    }
}

export  default App