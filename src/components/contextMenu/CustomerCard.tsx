import Image from "next/image"
import React from "react"
import callSvg from "../../../public/assets/call_24px.svg"
import personSvg from "../../../public/assets/person_24px.svg"

const CustomerCard = () => {
  return (
    <div className="flex flex-col py-8 px-4 items-center border-b bg-white">
      <Image
        className="w-24 h-24 rounded-full mx-auto object-cover"
        src={
          "https://images.unsplash.com/photo-1590895340509-793cb98788c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" as any
        }
        alt="pp"
        width="100"
        height="100"
      />
      <h4 className="mt-2 mb-4 text-lg font-medium">Amit RG</h4>
      <div className="flex flex-row">
        <button className="rounded-md border py-1 px-3 mr-2">
          <div className="flex flex-row">
            <Image src={callSvg} height="20" width="20" />
            <p className="ml-1">Call</p>
          </div>
        </button>
        <button className="rounded-md border py-1 px-3 mr-2">
          <div className="flex flex-row">
            <Image src={personSvg} height="20" width="20" />
            <p className="ml-1">Profile</p>
          </div>
        </button>
      </div>
    </div>
  )
}

export default CustomerCard
