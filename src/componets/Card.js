

function Card({data}) {
  return (
 <>
 <div className=" overflow-hidden sm:w-[390px] flex flex-col gap-3">
<img src="/project/project_pic.png" className="lg:w-[390px] lg:h-[276px]" alt="" />
<p className=" text-[16px] lg:text-[24px] text-[#333333] font-semibold">{data?.project_name}</p>
<div className=" flex flex-wrap gap-3 lg:gap-5">
    {data.skills.map((value)=>
    <>
    <div className=" bg-[#333333] lg:px-4 px-2 h-[24px] text-white text-[8px] lg:text-[13px] grid place-content-center "><span>{value}</span></div>
    </>
    )}
</div>
 <div>
    <span className=" text-[10px] lg:text-[12px]">{data.desc}</span>
 </div>
</div>
 </>
  )
}

export default Card