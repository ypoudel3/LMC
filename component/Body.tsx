import {useState} from "react";
type BodyProps = {
  scrollToBody2: () => void;
};
export default function Body({ scrollToBody2 }: BodyProps) {
const [isOpen, setIsOpen] = useState(false);
 const [showSignUp, setShowSignUp] = useState(false);
 
 return (
    <>
    <div className='relative'>
      <div className="absolute w-full">
        <div className="fixed top-0 z-50 w-full flex flex-row justify-between pt-3 pb-3 px-7 md:px-12 bg-black/90  brightness-90">
        <div className= "text-white flex flex-row items-center gap-2" >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
  <div>L-MCM</div></div>
      <div className=" flex justify-center">
        <ul className="flex gap-6 text-white">
            <li className="text-white">Home</li>
            <li className="text-white">How It Works</li>
            <li className="text-white">Legal Help</li>
            <li className="text-white">About Us</li>
        
            </ul>  
    
 </div>
    <div className=" text-white "><i className="fa-regular fa-user" onClick={() => setIsOpen(true)}></i></div>
       
        {isOpen && (
  <div className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-gray-300/20 backdrop-blur-md border-1 border-white p-6 rounded-xl shadow-xl max-w-md w-full relative">
      {showSignUp ? (
        // Sign Up Form
        <div className= "flex flex-col items-center">
          <i
            className=" flex fa-solid fa-arrow-left text-2xl mb-4 cursor-pointer self-start text-white"
            onClick={() => setShowSignUp(false)}
          ></i>
          <h1 className="bg-transparent text-2xl mb-4 text-white font-bold">
            Sign up </h1>
            <div className="relative w-full">
             <input type="text" className="bg-transparent border-b-2 text-white w-full h-12" placeholder="Name" /> 
             <i className="fa-regular fa-user text-white absolute right-3 top-1/2 transform -translate-y-1/2"></i> </div>
            <div className="relative w-full mt-3">
             <input type="text" className="bg-transparent border-b-2 text-white w-full h-12" placeholder="Email" /> 
             <i className="fa-regular fa-envelope text-white absolute right-3 top-1/2 transform -translate-y-1/2"></i> </div>
           
            <div className="relative w-full mt-3">
            <input type="password" className="bg-transparent border-b-2  text-white w-full h-12 " placeholder="Password" />
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-white  absolute right-3 top-1/2 transform -translate-y-1/2">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M16.5 10.5V7a4.5 4.5 0 00-9 0v3.5M4.5 10.5h15v9a2.25 2.25 0 01-2.25 2.25h-10.5A2.25 2.25 0 014.5 19.5v-9z" />
</svg>

</div>
            <div className="relative w-full mt-3">
            <input type="password" className="bg-transparent border-b-2  text-white w-full h-12 " placeholder="Confirm Password" />
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-white  absolute right-3.5 top-1/2 transform -translate-y-1/2">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M16.5 10.5V7a4.5 4.5 0 00-9 0v3.5M4.5 10.5h15v9a2.25 2.25 0 01-2.25 2.25h-10.5A2.25 2.25 0 014.5 19.5v-9z" />
</svg>

</div>
   <div className="flex text-white mt-8 gap-2">
    <input type="checkbox" className="w-4 cursor-pointer" /> <span className="text-gray-400">I agree to the</span> <a href="" className="">terms & conditions</a>
   </div>
        

  <button className="rounded-full w-28 h-10 mt-8 bg-white">
            Sign up
  </button>
        </div>
      ) : (
        // Login Form
        <form action="" className="flex flex-col items-center">
          <i
            className="text-white bg-transparent flex fa-solid fa-arrow-left text-2xl mb-4 cursor-pointer self-start"
            onClick={() => setIsOpen(false)}
          ></i>
          <h1 className="bg-transparent text-2xl mb-4 font-bold text-white">Log in </h1>

          <div className="relative w-full mt-3">
             <input type="text" className="bg-transparent border-b-2 text-white w-full h-12" placeholder="Email" /> 
             <i className="fa-regular fa-envelope text-white absolute right-3 top-1/2 transform -translate-y-1/2"></i> </div>

         <div className="relative w-full mt-3">
            <input type="password" className="bg-transparent border-b-2  text-white w-full h-12 " placeholder="Password" />
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-white  absolute right-3 top-1/2 transform -translate-y-1/2">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M16.5 10.5V7a4.5 4.5 0 00-9 0v3.5M4.5 10.5h15v9a2.25 2.25 0 01-2.25 2.25h-10.5A2.25 2.25 0 014.5 19.5v-9z" />
</svg>

</div>
<div className="flex flex-row mt-4 justify-between w-full">
  <div className="flex gap-1 text-gray-400">
  <input type="checkbox" className="" /> Remember me
</div>
<div className="text-white">Forgot password</div>
</div>

 <button className="rounded-full w-28 h-10 mt-4 bg-white">
            Log in
  </button>

          <div className="flex bg-transparent mt-4">
            <div className="bg-transparent text-gray-400">Don't have an account?{' '}</div>
            <div
              className="bg-transparent text-white cursor-pointer ml-2 font-bold"
              onClick={() => setShowSignUp(true)}
            >
              Sign up
            </div>
          </div>
        </form>
      )}
    </div>
  </div>
)}  


</div>
    
</div>
<div className="relative w-full h-screen">
 
  <img
    src="b1.jpg"
    alt="Background"
    className="w-full h-full object-cover brightness-50"
  />

 
  <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white px-4 pt-16">
      <div className="px-7 md:px-20 ">
        <div className="text-4xl md:text-5xl font-bold  ">Support & Safety for</div> 
      <div className="text-4xl md:text-5xl font-bold mt-2">Nepali Migrant Workers</div> 
      <div className="text-4xl md:text-5xl font-bold mt-2 ">Around the World</div>
      
      <p className="text-lg md:text-xl max-w-2xl mt-3 text-gray-100">
Emergency support, legal assistance, and financial tools all in <br />one easy to use platform. </p>
<button className="mt-14 rounded-full mx-1 px-3 h-10 bg-white hover:scale-105 text-gray-700" onClick={scrollToBody2}>Discover More</button>
   
     </div>
      
   
    
  </div>
</div>


 </div>
 
    
</>
  )
}
