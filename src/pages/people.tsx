import React from "react"
import Sidebar from "../components/Sidebar"

const People = () => {
  return (
    <div className="flex">
      <Sidebar name="people" />
      <main>
        <div className="flex h-screen">
          <div className="m-auto">
            <h3>People</h3>
          </div>
        </div>
      </main>
    </div>
  )
}

export default People
