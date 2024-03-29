import React from 'react'

function Experience() {
    const data=[
        {
            company_name:"Digital360india",
            details:[
                {
                    "role":"Full Stack Web Developer",
                    skills:["ReactJS","Next Js","MongoDB","TailwindCSS","Node JS"],
                    desc:"Digital360india is a dynamic web development company focused on delivering cutting-edge solutions using modern technologies like ReactJS, Next Js, MongoDB, TailwindCSS, and Node JS. Our team creates sleek and functional web applications tailored to meet the unique needs of our clients. With a clean and minimalist design approach, we ensure an intuitive user experience that aligns with the latest design trends."
                },
                {
                    "role":"Full Stack Web Developer - Intern",
                    skills:["ReactJS","Next Js","MongoDB","TailwindCSS","Node JS"],
                    desc:"Immersed in full-stack web development, honing skills under experienced mentorship."
                }
            ]
        },
        {
            company_name:"Dream Tech",
            details:[
                {
                    "role":"Web Development Intern",
                    skills:["ReactJS","MongoDB","TailwindCSS","Node JS","EJS"],
                    desc:"As a Web Development Intern at Dream Tech, I had the opportunity to explore modern web technologies. Working with a focus on innovation and creativity, I contributed to projects involving ReactJS, MongoDB, TailwindCSS, Node JS, and EJS. It was an enriching experience that broadened my skill set and prepared me for my career."
                }
            ]
        },
    ]
  return (
   <>
   <div className=' w-screen pb-[10vh] lg:pb-0 lg:h-screen bg-[#1A1A1A]'>
   <div className="w-[85vw] lg:w-[70vw] mx-auto text-white  ">
    <p className=' md:text-center pt-[5vh] text-[16px] md:text-[24px] '>EXPERIENCE<span className='hidden md:inline text-[48px] ms-[3vw] font-semibold'>My Journey</span></p>
   <span className=' block md:hidden text-[40px] md:text-[48px]  font-semibold'>My Journey</span>
 <div className='mt-[5vh] '>
 {data.map((value,index)=>
 <>
 <div className={`flex ${index>0?"mt-10":""}  text-white gap-8`}>
    <div className=' flex flex-col items-center gap-4 mt-3'>
<img src="experience/experience_svg1.svg" className='lg:min-w-[40px] min-h-[40px]' alt="" />
<div className=' flex-1  border w-0 border-white'></div>
<div className=' rounded-full bg-white w-2 h-2 lg:h-4 lg:w-4 '></div>
</div>
<div>
    <p className=' text-[16px] md:text-[24px] mb-2 '>{value.company_name}</p>
   {value.details.map((item,i)=>
   <>
   <div className={`flex flex-col md:flex-row lg:items-center gap-3 sm:gap-4 md:gap-10 ${i>0?"mt-6":""} `}>
   <p className='text-[16px] md:text-[24px]'>{item.role}</p>
   <div className=' flex flex-wrap gap-5 '>
    {item.skills.map(c=>
        <>
        <div className=" bg-[#4D4D4D] px-4 h-[24px] text-white text-[9px] md:text-[13px] grid place-content-center "><span>{c}</span></div>
        </>
        )}
   </div>
   </div>
   <div className='mt-3'>
    <p className=' text-[10px] md:text-[16px] font-light'>{item.desc}</p>
   </div>
   </>
   )}
</div>
</div>
 </>
 )}
 </div>
   </div>
   </div>
   </>
  )
}

export default Experience
