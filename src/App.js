import React,{Component} from 'react'
import  * as ContactsAPI from './utils/ContactsAPI'
import  ListContact  from './ListContact'



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
                <ListContact
                    contacts={this.state.contacts}
                    onDeleteContact={this.removeContact}
                />
            </div>
        )
    }
}

export  default App