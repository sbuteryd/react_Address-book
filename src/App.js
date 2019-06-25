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

    render() {
        return(
            <div>
                <ListContact contacts={this.state.contacts}/>
            </div>
        )
    }
}

export  default App