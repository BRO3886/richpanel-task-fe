import Image from "next/image"
import React from "react"
import inboxSvg from "../../public/assets/inbox_24px.svg"
import chartSvg from "../../public/assets/insert_chart_24px.svg"
import logo from "../../public/assets/logo.svg"
import peopleSvg from "../../public/assets/people_24px.svg"

const Sidebar = () => {
  return (
    <aside className="h-screen sticky top-0 bg-blue p-6 ">
      <div className="flex flex-col justify-center items-center">
        <div className="mb-6 rounded-sm bg-white">
          <Image src={logo}></Image>
        </div>
        <div className="my-4">
          {/* <Link href="/"> */}
          <Image src={inboxSvg}></Image>
          {/* </Link> */}
        </div>
        <div className="my-4">
          {/* <Link href="/"> */}
          <Image src={peopleSvg}></Image>
          {/* </Link> */}
        </div>
        <div className="my-4">
          {/* <Link href="/"> */}
          <Image src={chartSvg}></Image>
          {/* </Link> */}
        </div>
        <div className="absolute bottom-0 my-6">
          <img
            className="rounded-full h-8 w-8 object-cover"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
            alt="pp"
          />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
