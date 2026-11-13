import React, { useState } from 'react'
import Container from '../Common/Container'
import Anchor from '../Ui/Anchor'
import Image from '../Ui/Image'
import logo from "../../assets/Logo.png"
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const menuData=[
  {
    id:1,
    label:"Home",
    url:"#"
  },
  {
    id:2,
    label:"About us",
    url:"#"
  },
  {
    id:3,
    label:"Sermon",
    url:"#"
  },
  {
    id:4,
    label:"Blog",
    url:"#"
  }
]

function Navbar() {
const [sidebarshow, setsidebarshow] = useState(false)
const handelsidebar=()=>{
  setsidebarshow(true)

}
const closebtn=()=>{
  setsidebarshow(false)

}
  return (
   <>
    <nav className='bg-[#0D0D0D] py-3 '>
      <Container>
         <div className='flex justify-between'>
          <div className='flex items-center gap-[128px]'>
             <Anchor href="/" className="relative after:absolute after:content-[''] after:bg-white/10 after:h-22 after:w-0.5 after:-right-16 after:-bottom-7">
                 <Image src={logo} alt="notfound" />
             </Anchor>
             <ul className=' hidden lg:flex gap-12'>
               {
                menuData.map((item,index)=>(
                 <li key={index}>
                    <Anchor href={item.url} className="text-base font-normal text-[#FFFFFF] uppercase  font-robotoCondensed">
                    {item.label}
                   </Anchor>
                 </li>

                ))
               }
              
             </ul>
          </div>
          <div>
            <button className=' hidden lg:block bg-[#FFD2A4] px-8 py-3 xl:px-12 xl:py-5 font-normal text-base text-[#1C1D28] uppercase rounded-xl font-robotoCondensed'>Contact us</button>
            <FaBars onClick={handelsidebar} className='text-white text-2xl lg:hidden cursor-pointer'/>

          </div>
         </div>
      </Container>
      {sidebarshow &&
      <>
        <div className={`absolute right-0 top-0 h-screen w-[300px] bg-[#1C1D28]/50 z-20 lg:hidden ${sidebarshow ?`translate-x-0`:`translate-x-full`}`}>
        <button onClick={closebtn} className='bg-red-600 mt-3 ml-3 px-1 py-1'><IoMdClose className='text-[#FFFFFF] text-2xl '/>
       </button>
       

       <ul className='mt-10 ml-2  lg:flex gap-12'>
               {
                menuData.map((item,index)=>(
                 <li key={index}>
                    <Anchor href={item.url} className="text-base font-normal text-[#FFFFFF] uppercase  font-robotoCondensed onClick={()=>setsidebarshow(false)}">
                    {item.label}
                   </Anchor>
                 </li>

                ))
               }
              
             </ul>
               <button className='lg:block bg-[#FFD2A4] px-2 py-3 xl:px-12 xl:py-5 font-normal text-base text-[#1C1D28] uppercase rounded-xl font-robotoCondensed'>Contact us</button>
             </div>
             </>
       

     }
      
    </nav>
   </>
  )
}

export default Navbar