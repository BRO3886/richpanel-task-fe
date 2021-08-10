import React from "react"

const ChatWindow = () => {
  const n = 50
  return (
    <div className="w-4/6">
      <div className="flex flex-col h-screen">
        <h3 className="px-6 py-4 border-b text-2xl font-bold">Amit RG</h3>
        <div className="h-full w-full bg-grey overflow-y-auto justify-between my">
          <div className="flex-grow">
            {[...Array(n)].map((e, i) => (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aliquid quia ab reiciendis.
                Vitae repudiandae mollitia voluptatum cum dignissimos, accusamus fugiat distinctio ab
                necessitatibus nam nemo aut. Officia, ipsam itaque.
              </p>
            ))}
          </div>
          <div className="bottom-0 z-10 sticky p-4 ">
            <input
              className="w-full p-2 rounded-md border border-blue focus:outline-none shadow-lg"
              type="text"
              name=""
              id=""
              placeholder="Message Hiten Saxena"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatWindow
