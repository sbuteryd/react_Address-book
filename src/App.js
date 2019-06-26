import React,{Component} from 'react'
import ContactsAPI, {getAll} from './utils/ContactsAPI'
import ListContacts from './ListContacts'

class App extends Component{
    state = {
        contacts:[]
    };
    componentDidMount() {
        getAll().then(contacts=>{
            this.setState({
                contacts
            })
        })
    }

    removeContact =(contact)=>{
        this.setState((state)=>({
            contacts:state.contacts.filter((c)=> c.id !==contact.id)
        }))
    }

    render() {

        return(
            <div>
                <ListContacts
                    contacts ={this.state.contacts}
                    ondeleteContact = {this.removeContact}

                />
            </div>
        )
    }
}

export  default App