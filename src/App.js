import './App.css';
import { Sidebar } from "./Sidebar";
import { Chat } from "./Chat"

export const App = () =>{
  return (
    <div className="app">
      <div className="app-body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}
