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

    render() {
        return(
            <div>
                <ListContact contacts={this.state.contactsList} />
            </div>
        )
    }
}

export  default App