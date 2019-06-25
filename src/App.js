import React,{Component} from 'react'
import  * as ContactsAPI from './utils/ContactsAPI'



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
                Hello
            </div>
        )
    }
}

export  default App