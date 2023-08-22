import React,{useState} from "react"
import { links } from "../assets/data/dummy"
import { AiFillCloseCircle } from "react-icons/ai"
import { AiOutlineMenu } from "react-icons/ai"
import { BsChatLeftDotsFill } from "react-icons/bs"
import {BsFillCartCheckFill} from "react-icons/bs"
import {IoIosNotifications} from "react-icons/io"
import avatar from '../assets/data/avatar.jpg'
import {AiFillDownCircle} from 'react-icons/ai'
import { useStateContext } from "../contexts/ContextProvider"
import { Link } from "react-router-dom"


const Nav = () => {
    const [isActive, setIsActive] = useState(false)
    const {handleClick,isClicked} = useStateContext()
    console.log(isClicked)


  return (
    <div className="">
       <div className={`bg-white h-screen ${isActive ? "visible  overflow-y-auto" : 'hidden' }  w-48 md:w-64 px-4 md:flex flex-col gap-4 pl-2 py-4 fixed my-12 md:my-0`}>
      
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <div className="px-4 overflow-y-auto">
        {
          links.map((ele,i)=>{
            return (
              <div key={i} className="py-1">
                
                  <a className="font-bold font-sans">{ele.title}</a>
                  
                  {
                    ele.links.map((e,i)=>{
                      return (
                        <div key={i} className="flex items-center pl-4 my-2 gap-2 hover:bg-slate-200 rounded-lg px-1 py-1">
                          {e.icon}
                          <a className=""><Link to={`/${e.name}`}>{e.name}</Link></a>
                          </div>
                      )
                    })
                  }
            
                </div>
            )
          })
        }
      </div>
     
  </div>
      <div className="text-3xl  flex justify-between bg-white">
        <button onClick={()=>{setIsActive(!isActive)}}>

        <AiOutlineMenu/>
        </button>
        <div className="flex items-center gap-5 md:gap-12 py-2 mx-2 md:mx-12">

        <button onClick={()=>{
          handleClick("cart")
        }}><BsFillCartCheckFill/></button>
        <button onClick={()=>{
          handleClick("chat")
        }}><BsChatLeftDotsFill/></button>
        <button onClick={()=>{
          handleClick("notification")
        }}><IoIosNotifications/></button>
        <button onClick={()=>{
          handleClick("profile")
        }} className="flex items-center">
          <img src={avatar} className="w-8 h-8 rounded-3xl"/>
          <h2 className="text-sm">Hi, Michale</h2>
          <AiFillDownCircle className="h-4"/>
        </button>
        </div>

      </div>
      <div>
      </div>

    </div>
   
  )
}

export default Nav