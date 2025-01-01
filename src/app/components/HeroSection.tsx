import React from 'react'

const HeroSection = () => {
  return (
<section>
<div>
   
   <div className="relative h-[450px] grid grid-cols-1 place-items-center md:m-10 m-3 ">
     <video
       autoPlay
       loop
       muted
       className="absolute w-full h-full object-cover rounded-lg"
     >
       <source src="/video/bg-video.mp4" type="video/mp4" />
     </video> 
     

   </div>
   <div className="absolute top-[3.5%] md:top-[6%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto grid grid-cols-1  place-items-center max-w-max h-auto bg-green-900 bg-opacity-70 text-white text-center rounded-lg p-4 sm:p-6 md:px-10 py-3">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
    Discover the Art of Parenting
  </h1>
  <p className="text-md sm:text-ld md:text-xl lg:text-2xl text-pink-100 leading-relaxed">
  Parents are the first teachers, shaping minds and hearts with love and wisdom". 
  </p>
</div>

   </div>
</section>
  )
}

export default HeroSection