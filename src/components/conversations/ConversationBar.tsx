import React from "react"
import Image from "next/image"
import reloadIcon from "../../../public/assets/refresh.svg"
import ConversationTile from "./ConversationTile"

const ConversationBar = () => {
  const n = 20
  return (
    <div className="w-1/6">
      <div className="max-h-screen border-r overflow-y-hidden">
        <div className="top-0 sticky bg-white flex flex-row items-end justify-between px-6 py-4 border-b">
          <h2 className="font-bold text-2xl pr-8">Conversations</h2>
          <span className="">
            <Image src={reloadIcon} height="20" width="20" />
          </span>
        </div>
        <ul className="h-screen flex flex-col overflow-y-auto">
          <ConversationTile />
          <ConversationTile />
          <ConversationTile />
          {/* {[...Array(n)].map((e, i) => (
            <ConversationTile></ConversationTile>
          ))} */}
        </ul>
      </div>
    </div>
  )
}

export default ConversationBar
