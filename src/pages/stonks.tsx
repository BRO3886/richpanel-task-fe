import React from "react"
import Sidebar from "../components/Sidebar"

const Stonks = () => {
  return (
    <div className="flex">
      <Sidebar name="stonks" />
      <main>
        <div className="flex h-screen">
          <div className="m-auto">
            <h3>Stonks</h3>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Stonks
