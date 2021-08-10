import React from "react"

const ConversationTile = () => {
  return (
    <button className="py-2 border-b" onClick={() => {}}>
      <div className="flex flex-row items-center mx-3">
        <input className="mr-4" type="checkbox" />
        <div className="flex flex-col items-start">
          <h3 className="text-base font-semibold">Amit RG</h3>
          <p className="text-xs">Facebook DM</p>
        </div>
      </div>
    </button>
  )
}

export default ConversationTile
