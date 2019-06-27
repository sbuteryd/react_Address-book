import React,{Component} from 'react'
import * as ContactsAPI from './utils/ContactsAPI'
import ListContact from './componet/ListContact'


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
        console.log(contact)
    };
    render() {
        return(
            <div>
                <ListContact
                    onDeleteContact={this.clearContact}
                    contacts={this.state.contactsList} />
            </div>
        )
    }
}

export  default App