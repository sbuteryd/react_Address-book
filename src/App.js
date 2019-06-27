import React,{Component} from 'react'
import * as ContactsAPI from './utils/ContactsAPI'


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
        {console.log('state',this.state.contactsList)}
        return(
            <div>
                Hello
            </div>
        )
    }
}

export  default App