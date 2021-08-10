import React from "react"
import CustomerCard from "./CustomerCard"
import DetailsCard from "./DetailsCard"

const ContextMenu = () => {
  return (
    <div className="w-1/6">
      <div className="h-screen border-l overflow-y-hidden bg-contextMenuGrey">
        <CustomerCard />
        <DetailsCard />
      </div>
    </div>
  )
}

export default ContextMenu
