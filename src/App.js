import React,{Component} from 'react'
import ContactsAPI, {getAll} from './utils/ContactsAPI'

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

    render() {

        return(
            <div className='contact'>
                Hello
            </div>
        )
    }
}

export  default App