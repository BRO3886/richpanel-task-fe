import React from "react"

const DetailsCard = () => {
  return (
    <div className="h-screen">
      <div className="max-w-md p-4 bg-white shadow-sm rounded-lg mx-4 my-4 border">
        <div>
          <h2 className="text-gray-800 text-xl font-semibold">Customer Details</h2>
          <div className="flex justify-between">
            <p className="mt-2 text-gray-400 font-medium">Email</p>
            <p className="truncate mt-2 font-medium">amit@richpanel.com</p>
          </div>
          <div className="flex justify-between">
            <p className="mt-2 text-gray-400 font-medium">First Name</p>
            <p className="truncate mt-2 font-medium">Amit</p>
          </div>
          <div className="flex justify-between">
            <p className="mt-2 text-gray-400 font-medium">Last Name</p>
            <p className="truncate mt-2 font-medium">RG</p>
          </div>
        </div>
        <div className="flex justify-start mt-4">
          <a href="#" className="font-medium text-blue">
            View more details
          </a>
        </div>
      </div>
    </div>
  )
}

export default DetailsCard
