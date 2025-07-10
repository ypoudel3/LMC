import React, { useState } from "react";

export default function Body() {
 const [isOpen, setIsOpen] = useState(false);
 const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>   
    
<div className="px-5 pt-4">
  <div className="pb-3">
    <p className="bg-gray-100 rounded-3xl h-10 flex items-center justify-center ">Sign up and &nbsp; <b className="bg-gray-100">GET 10% OFF &nbsp;</b> for your first order. &nbsp; 
    <a href="" className="bg-gray-100 text-blue-800 underline font-bold"> Sign up now</a></p>
  </div>
  <div className=" bg-gray-100 rounded-3xl">
  <div className="navbar flex flex-col md:flex-row items-center justify-between pt-3 px-11 md:px-12 bg-gray-100 rounded-2xl">
        <span className=" bg-gray-100" >BookLoop</span>
        <ul className="nav-item">
            <li className=" bg-gray-100">Home</li>
            <li className=" bg-gray-100">Textbooks</li>
            <li className=" bg-gray-100">Notebooks</li>
            <li className=" bg-gray-100">Membership</li>
            
            </ul>
        
    <div className="icons">
              <ul>
               <li className="bg-gray-100"><i className="fa-solid fa-cart-shopping bg-gray-100"></i></li>
               <li className="bg-gray-100"><i className="fa-regular fa-user bg-gray-100" onClick={() => setIsOpen(true)}></i></li>
            
        {isOpen && (
  <div className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full relative">
      {showSignUp ? (
        // Sign Up Form
        <div className=" bg-white flex flex-col items-center">
          <i
            className=" bg-white flex fa-solid fa-arrow-left text-2xl mb-4 cursor-pointer self-start"
            onClick={() => setShowSignUp(false)}
          ></i>
          <h1 className="bg-white text-2xl mb-4">Sign up for BookLoop</h1>

          <div className=" bg-white flex flex-col items-start mb-2 w-full">
            <p className="bg-white mb-1">Email address</p>
            <input type="text" className="bg-white border-2 rounded w-full h-12 px-3" />
          </div>

          <div className="bg-white flex flex-col items-start mb-2 w-full">
            <p className="bg-white mb-1">Password</p>
            <input type="password" className="bg-white border-2 rounded w-full h-12 px-3" />
          </div>

          <div className="bg-white flex flex-col items-start mb-2 w-full">
            <p className="bg-white mb-1">Confirm Password</p>
            <input type="password" className="bg-white border-2 rounded w-full h-12 px-3" />
          </div>

          <button className="bg-white border-2 rounded w-full h-12 mt-2 border-blue-800 text-blue-800">
            Sign up
          </button>
        </div>
      ) : (
        // Login Form
        <form action="" className="bg-white flex flex-col items-center">
          <i
            className="bg-white flex fa-solid fa-arrow-left text-2xl mb-4 cursor-pointer self-start"
            onClick={() => setIsOpen(false)}
          ></i>
          <h1 className="bg-white text-2xl mb-4">Log in to BookLoop</h1>

          <div className="bg-white flex flex-col items-start mb-2 w-full">
            <p className="bg-white mb-1">Email address</p>
            <input type="text" className="bg-white border-2 rounded w-full h-12 px-3" />
          </div>

          <div className="bg-white flex flex-col items-start mb-2 w-full">
            <p className="bg-white mb-1">Password</p>
            <input type="password" className="bg-white border-2 rounded w-full h-12 px-3" />
          </div>

          <button className="bg-white border-2 rounded w-full h-12 mt-2 border-blue-800 text-blue-800">
            Log in
          </button>

          <div className="flex bg-white mt-2">
            <div className="bg-white">Don't have an account?{' '}</div>
            <div
              className="bg-white text-blue-800 cursor-pointer ml-2 font-bold"
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
              
              </ul>
            </div>
        

    </div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-14 px-11 pb-14 bg-gray-100 rounded-3xl" >
    <div className="container1 p-3 bg-gray-100">
    
    <div className="text bg-gray-100">
      <p className="text-6xl font-sans font-medium mt-4 bg-gray-100">For All Your <br />Reading Needs </p>
<p className="mt-11 bg-gray-100">This allows the element to grow and fill available space inside its flex container. This allows the element to grow and fill available space inside its flex container.</p>
    </div>

<div className=" pt-14 flex items-center bg-gray-100">
  <div className="flex items-center bg-white rounded-full shadow-lg px-4 py-2 w-96">
    <input
      type="text"
      placeholder="Search Books..."
      className="flex-grow text-gray-600 placeholder-gray-400 bg-transparent focus:outline-none"
    />
    <i className="fas fa-search text-gray-500 text-lg cursor-pointer bg-inherit"></i>
  </div>
</div>
 
</div>

<div className="flex justify-center items-center space-x-[-6] bg-gray-100 pr-4 ">
  <img src="img1.jpg"
       className="w-32 h-48 object-cover transform -rotate-6 scale-90 opacity-80 transition duration-300 hover:scale-95 hover:rotate-0" />

  <img src="book2.jpg"
       className="w-36 h-52 object-cover transform -rotate-3 scale-95 opacity-90 transition duration-300 hover:scale-100 hover:rotate-0" />

  <img src="img3.jpg"
       className="w-44 h-64 object-cover z-10 shadow-xl transform scale-105 transition duration-300" />

  <img src="img4.jpg"
       className="w-36 h-52 object-cover transform rotate-3 scale-95 opacity-90 transition duration-300 hover:scale-100 hover:rotate-0" />
  <img src="img5.jpg"
       className="w-32 h-48 object-cover transform rotate-6 scale-90 opacity-80 transition duration-300 hover:scale-95 hover:rotate-0" />
</div>
</div>


    </div>
    </div>


    </>
  )
}
