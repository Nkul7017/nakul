import Footer from "@/componets/Footer"
import Navbar from "@/componets/Navbar"
import OrganizationalProjects from "@/componets/OrganizationalProjects"
import PersonalProjects from "@/componets/PersonalProjects"


function Page() {
  return (
    <>
     <div className=" w-screen">
  <div className=""><Navbar/>
  <div className=' w-[85vw]  mx-auto'>
<p className='  pt-[8vh] text-[24px] '>FEATURED PROJECTS </p>
<span className='text-[48px] font-semibold'>My Creations</span>
</div>
  </div>
  <div className=" w-[85vw] mt-[10vh]   mx-auto "><PersonalProjects/></div>
  {/* <div className="w-[85vw] mt-[6vh]  mx-auto"><OrganizationalProjects/></div> */}
<div className=" mt-[10vh]"><Footer/></div>
  </div>
    </>
  )
}

export default Page
