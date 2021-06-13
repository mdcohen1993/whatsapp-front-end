import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import { SidebarChat } from './SidebarChat'
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar src="https://avatars.githubusercontent.com/u/70850254?s=60&v=4" />
        <div className="sidebar-header-right">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-search-container">
            <SearchOutlined />
            <input 
            placeholder="Search or start new chat"
            type="text" />
        </div>
      </div>
      <div className="sidebar-chats">
          <SidebarChat />
          <SidebarChat />
          <SidebarChat /> 
      </div>
    </div>
  );
};
