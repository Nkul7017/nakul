'use client'
import React from 'react'
import Card from './Card'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
function Projects() {
    const data=[
        {
            project_name:"ShivaayShaktiyog",
            skills:["React Js","MongoDB","TailwindCSS"],
            desc:"Montserrat is a geometric sans-serif typeface designed by Argentine graphic designer Julieta Ulanovsky and released in 2011."
        },
        {
            project_name:"ShivaayShaktiyog",
            skills:["React Js","MongoDB","TailwindCSS"],
            desc:"Montserrat is a geometric sans-serif typeface designed by Argentine graphic designer Julieta Ulanovsky and released in 2011."
        },
        {
            project_name:"ShivaayShaktiyog",
            skills:["React Js","MongoDB","TailwindCSS"],
            desc:"Montserrat is a geometric sans-serif typeface designed by Argentine graphic designer Julieta Ulanovsky and released in 2011."
        },
    ]
  return (
    <>
    <div className=' h-screen w-screen relative'>

        
<img src="/project/project_svg1.svg" className="absolute z-[1]  left-0 top-0 " alt="" />
<img src="/project/project_svg2.svg" className="absolute left-[10vw] top-0  " alt="" />
{/* <img src="/project/project_svg3.svg" className="absolute right-[8vw] z-[-1] bottom-0  " alt="" />
<img src="/project/project_svg4.svg" className="absolute right-[2vw] z-[-2] bottom-0  " alt="" /> */}

        <div className=' relative z-50 w-[85vw] h-[100%] mx-auto'>

   

   <p className=' md:text-center pt-[10vh] sm:pt-[5vh] text-[16px] md:text-[24px] '>FEATURED PROJECTS <span className='hidden md:block text-[48px] ms-[3vw] font-semibold'>My Creations</span></p>
   <span className=' block md:hidden text-[36px] md:text-[48px]  font-semibold'>My Creations</span>

   <div className=' mt-[7vh] hidden gap-4 lg:gap-8 md:flex justify-between   '>
   {data.map((item,i)=>
   <>
   <Card data={item} key={i} />
   </>
   )}
   </div>

   <div className="mt-4 w-[100%] h-[400px]    flex md:hidden flex-wrap ">
          <Swiper
       slidesPerView={1}
       spaceBetween={30}
       loop={true}
       pagination={{
         clickable: true,
       }}
      //  navigation={true}
       modules={[Pagination, Navigation]}
       className="mySwiper"
      >
   {data.map((item,i)=>
    <>
    <SwiperSlide>
    <Card data={item} key={i} />
  </SwiperSlide>
  </>
  )}
      </Swiper>
              </div >

   <div className=' mt-[4vh]'>
   <Link href='/projects' type=""
            class="relative inline-block text-lg group"
          >
            <span class="relative z-10 block px-5 py-3 h-[43px] overflow-hidden font-medium w-[157px] leading-tight text-gray-800 transition-colors duration-300 ease-out border border-gray-900  group-hover:text-white">
              <span class="absolute inset-0  w-full h-full bg-gray-50"></span>
              <span class="absolute left-0 w-[600px] h-48  transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black group-hover:-rotate-180 ease"></span>
              <span  class="relative  text-[16px] flex justify-center">View All</span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full   transition-all duration-200 ease-linear bg-gray-900  group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </Link>
   </div>
    </div>
    </div>
    </>
  )
}

export default Projects
