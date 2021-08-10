import ChatWindow from "../components/chat/ChatWindow"
import ContextMenu from "../components/contextMenu/ContextMenu"
import ConversationBar from "../components/conversations/ConversationBar"
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div className="flex flex-row">
      <Sidebar name="" />
      <main className="flex flex-row w-full">
        <ConversationBar />
        <ChatWindow />
        <ContextMenu />
      </main>
    </div>
  )
}
