import { useRef } from "react";
import { MessagesContainer, RoomsContainer } from "./containers";
import { useSockets } from "./context/socket.context";
function App() {
  const {socket, username, setUsername} = useSockets();
  const usernameRef = useRef <HTMLInputElement>(null)

  const handleSetUsername=()=>{
    const userNameValue = usernameRef.current?.value
    if(!userNameValue)return;
    setUsername(userNameValue);

  localStorage.setItem("username",userNameValue)
  };
  if(!username)
    return(
  <div>
    <input placeholder="Username" ref={usernameRef}/>
    <button onClick={handleSetUsername}>Log in</button>
  </div>);
  
  return (
    <div className="App">
      <RoomsContainer/>
      <MessagesContainer/>
    </div>
  );
}

export default App;