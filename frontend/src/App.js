import{ChatEngine} from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';


const App = () => {
    if(!localStorage.getItem('username')) return(<LoginForm />)
    return(
        <ChatEngine
            height="100vh"
            projectID="030e731c-6b20-4d9c-91d4-a1db8eac6c36"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>} 
        />
    )
}

export default App;


