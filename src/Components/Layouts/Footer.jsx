import React from 'react'
import Container from '../Common/Container.jsx'
import footerlogo from '../../assets/footerlogo.png'
import Image from '../Ui/Image.jsx'
import Anchor from '../Ui/Anchor.jsx'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const linkstyle =`text-white text-sm font-normal font-robotoCondensed`
const footerData=[
  {
    id:1,
    title:"(480) 555-0103",
  },
  {
    id:2,
    title:"4517 Washington Ave. "
  },
  {
    id:3,
     title:"finsweet@example.com"
  }
]
const menuData=[
  {
    id:1,
    label:"About us",
    url:"#"
  },
  {
    id:2,
    label:"Sermons",
    url:"#"
  },
  {
    id:3,
    label:"event",
    url:"#"
  },
  {
    id:4,
    label:"Blog",
    url:"#"
  }
]



function Footer() {
  return (
   <>
   <footer className='bg-[#161722] pt-16 pb-18'>
     <Container>
        <div className='flex gap-[270px]'>
            <div>
             <Anchor ><Image src={footerlogo} alt="not found"/></Anchor>
             <div className="mt-4">
              <span className={linkstyle}>© Copyright Finsweet 2022</span>
            </div>
            <div className='mt-8'>
            <ul className='text-white text-sm font-normal font-robotoCondensed flex-col gap-6 flex  mt-5'>
             {
                footerData.map((item,id)=>(
                       <li key={id}>{item.title}</li>
                ))
             }
           </ul>
          </div>
         </div>
         <div className='flex gap-[72px]'>
            <div>
                <span className='text-white text-base font-normal font-robotoCondense'>
                    Quicklinks</span>
                 <ul className='flex-col gap-6 flex  mt-5 '>
               {
                menuData.map((item,index)=>(
                 <li key={index}>
                    <Anchor href={item.url} className="text-sm font-normal text-[#FFFFFF]/50 uppercase  font-robotoCondensed">
                    {item.label}
                   </Anchor>
                 </li>

                ))
               }
            </ul>
            </div>
             <div>
                <span className='text-white text-base font-normal font-robotoCondense'>
                    Connect 
                </span>
                <div className='mt-5 flex text-[#FFD2A4] text-xl gap-4'>
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />
                </div> 
            </div>
            <div >
                <h2 className='uppercase font-bold text-4xl text-white max-w-[450px] font-robotoCondense tracking-tight mb-8'>Subscribe to get Latest Updates and News</h2>
                <div className='relative'>
                <input className='text-white pl-5 py-5.25 w-62 rounded-xl font-normal text-base placeholder:text-white font-robotoCondense' type="email"placeholder='Yourmail@gmail.com' />
                <button className=' lg:block bg-[#FFD2A4] px-8 py-3 xl:px-[64px] xl:py-[24px] font-normal text-base text-[#1C1D28] uppercase rounded-xl font-robotoCondensed absolute -top-1.25 right-0'>Subscribe</button>
                </div>

            </div>
         </div>
         
        </div>
       
     </Container>
    </footer>
   </>
  )
}

export default Footer