function Skills() {
  return (
    <>
    <div className=" w-screen relative overflow-hidden  ">
    <img src="/skills/skills_svg1.svg" className="absolute right-[6vw]  -top-[10vh] " alt="" />
<img src="/skills/skills_svg2.svg" className="absolute right-[2vw] z-[-1]    " alt="" />
      <div className=" w-[85vw] lg:w-[70vw] mx-auto  relative z-20 ">
    {/* <p className=' text-center pt-[5vh] text-[24px] '>TECH SKILLS <span className='text-[48px] ms-[3vw] font-semibold'>My Superpowers</span></p> */}
    <p className=' md:text-center pt-[5vh] text-[16px] md:text-[24px] '>TECH SKILLS <span className='hidden md:block text-[48px] ms-[3vw] font-semibold'>My Superpowers</span></p>
   <span className=' block md:hidden text-[40px] md:text-[48px]  font-semibold'>Superpowers</span>

   <div className="mt-[7vh] ">
   <div className="  grid md:grid-cols-2 gap-4">
 <div className=" grid grid-rows-3 gap-4 ">
<div className=" h-[108px] md:h-[140px]  bg-[#C4D3FF4D] grid place-content-center ">
  <img src="/superpowers/nodejs.png " alt="" />
</div>
<div className=" grid gap-4 grid-cols-2">
<div className=" h-[108px] md:h-[140px]  bg-[#C4D3FF4D] grid place-content-center "><img src="/superpowers/bs.png" alt="" /></div>
  <div className=" h-[108px] md:h-[140px]  bg-[#C4D3FF4D] grid place-content-center"><img src="/superpowers/git.png" alt="" /></div>
</div>
<div className="grid gap-4 grid-cols-2">
<div className="  h-[108px] md:h-[140px] bg-[#C4D3FF4D] grid place-content-center"><img src="/superpowers/react.png" alt="" /></div>
  <div className=" h-[108px] md:h-[140px]  bg-[#C4D3FF4D] grid place-content-center"><img src="/superpowers/next.png" alt="" /></div>
</div>
<div className=" md:hidden h-[108px] md:h-[140px]  bg-[#C4D3FF4D] grid place-content-center"><img src="/superpowers/express.png" alt="" /></div>
 </div>
 <div className=" grid gap-4 grid-rows-3">
<div className=" grid gap-4 grid-cols-2">
  <div className="h-[108px] md:h-[140px]  bg-[#C4D3FF4D] grid place-content-center"><img src="/superpowers/git.png" alt="" /></div>
  <div className="h-[108px] md:h-[140px]  bg-[#C4D3FF4D] grid place-content-center"><img src="/superpowers/tailwind.png" alt="" /></div>
</div>

<div className=" grid gap-4 grid-cols-2">

<div className="h-[108px] md:h-[140px]  bg-[#C4D3FF4D] grid place-content-center"><img src="/superpowers/mongo.png" alt="" /></div>
  <div className="h-[108px] md:h-[140px]  bg-[#C4D3FF4D] grid place-content-center"><img src="/superpowers/js.png" alt="" /></div>
</div>
<div className="h-[108px] md:h-[140px] hidden bg-[#C4D3FF4D] md:grid place-content-center"><img src="/superpowers/express.png" alt="" /></div>
 </div>
   </div>
   </div>
      </div>
    </div>
    </>
  )
}

export default Skills
