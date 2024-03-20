'use client'
import React from 'react'
import Card from './Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
function OrganizationalProjects() {
  const data=[
    {
        project_name:"Shivaay Shakti Yog",
        skills:["React Js","MongoDB","TailwindCSS","Node JS"],
        desc:"A MERN stack-powered platform offering transformative yoga courses, complemented by an intuitive admin panel for seamless management.",
        images:"/main_projects/shivaay.png",
        link:"https://www.shivaayshaktiyog.com/"
    },
    {
        project_name:"Shaadi Vyah",
        skills:["Next Js","MongoDB","TailwindCSS","Node JS"],
        desc:"Shaadi Vyah is the first destination wedding portal in Uttarakhand, revolutionizing the way weddings are planned and executed.",
        images:"/main_projects/shaadivyah.png",
        link:"https://www.shaadivyah.com/"
    },
    {
        project_name:"Edu 123",
        skills:["Next Js","Airtable","TailwindCSS", "Cloudinary"],
        desc:"Edu 123 serves as a comprehensive listing portal for schools, guiding parents and students to discover the best educational institutions.",
        images:"/main_projects/edu123.png",
        link:"https://www.edu123.in/"
    },
]
  return (
    <>
    
<div className="  ">
<p className='  text-[24px] '>Organizational Projects </p>
</div>
<div className=' mt-[7vh] hidden gap-4 lg:gap-8 md:flex justify-between   '>
   {data.map((item,i)=>
   <>
   <Card data={item} key={i} />
   </>
   )}
   </div>

   <div className="mt-4 w-[100%] h-[400px]     flex md:hidden flex-wrap ">
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
   <div className=' flex justify-end mt-[6vh]'>
   <button type=""
            class="relative hidden md:inline-block text-lg group"
          >
            <span class="relative z-10 block px-5 py-2 h-[43px] overflow-hidden font-medium w-[157px] leading-tight text-gray-800 transition-colors duration-300 ease-out border border-gray-900  group-hover:text-white">
              <span class="absolute inset-0  w-full h-full bg-gray-50"></span>
              <span class="absolute left-0 w-[600px] h-48  transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black group-hover:-rotate-180 ease"></span>
              <button class="relative  text-[16px] ">More...</button>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full   transition-all duration-200 ease-linear bg-gray-900  group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
   </div>
    </>
  )
}

export default OrganizationalProjects
