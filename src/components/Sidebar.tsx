import Image from "next/image"
import Link from "next/link"
import React from "react"
import logo from "../../public/assets/logo.svg"
import content from "../lib/content"

type Page = {
  name: string
}

const inboxSVG = (active: boolean) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.99001 3H19C20.1 3 21 3.89 21 5V19C21 20.1 20.1 21 19 21H4.99001C3.88 21 3 20.1 3 19L3.00999 5C3.00999 3.89 3.88 3 4.99001 3ZM15 15H19V5H5V15H9C9 16.66 10.35 18 12 18C13.65 18 15 16.66 15 15Z"
        fill={active ? "#004d95" : "white"}
        fill-opacity="1.0"
      />
    </svg>
  )
}

const peopleSVG = (active: boolean) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.99 8C10.99 9.65997 9.66003 11 8 11C6.33997 11 5 9.65997 5 8C5 6.34003 6.33997 5 8 5C9.66003 5 10.99 6.34003 10.99 8ZM18.99 8C18.99 9.65997 17.66 11 16 11C14.34 11 13 9.65997 13 8C13 6.34003 14.34 5 16 5C17.66 5 18.99 6.34003 18.99 8ZM8 13C5.67004 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM15.03 13.05C15.38 13.02 15.7101 13 16 13C18.3301 13 23 14.17 23 16.5V19H17V16.5C17 15.02 16.1901 13.89 15.03 13.05Z"
        fill={active ? "#004d95" : "white"}
        fill-opacity="1.0"
      />
    </svg>
  )
}

const chartSVG = (active: boolean) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.90002 21 3 20.1 3 19V5C3 3.9 3.90002 3 5 3ZM7 17H9V10H7V17ZM13 17H11V7H13V17ZM15 17H17V13H15V17Z"
        fill={active ? "#004d95" : "white"}
        fill-opacity="1"
      />
    </svg>
  )
}

const svgMap = new Map([
  ["/", inboxSVG],
  ["/people", peopleSVG],
  ["/stonks", chartSVG],
])

const Sidebar = (props: Page) => {
  return (
    <aside className="h-screen sticky top-0 bg-blue">
      <div className="flex flex-col justify-center items-center">
        <div className="m-6 rounded-sm bg-white">
          <Image src={logo}></Image>
        </div>
        {content.nav.links.map((link, idx) => {
          const el = svgMap.get(link.to)
          if (el) {
            return (
              <div
                className={`my-2 p-6 ${props.name === link.to.replace("/", "") ? "bg-white border-r" : ""}`}
                key={idx}
              >
                <Link href={link.to}>
                  <div>{el(props.name === link.to.replace("/", ""))}</div>
                </Link>
              </div>
            )
          }
        })}
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
