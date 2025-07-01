
export default function Body() {
  return (
    <>   
    
<div className="px-5 pt-5">
  <div className=" bg-gray-100 rounded-3xl">
  <div className="navbar flex flex-col md:flex-row items-center justify-between px-11 md:px-12 bg-gray-100 rounded-2xl">
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
               <li className="bg-gray-100"><i className="fa-regular fa-user bg-gray-100"></i></li>
              </ul>
            </div>
        

    </div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4  px-11 pb-11 bg-gray-100 rounded-3xl" >
    <div className="container1 p-3 bg-gray-100">
    
    <div className="text bg-gray-100">
      <p className="text-6xl font-sans font-medium mt-4 bg-gray-100">For All Your <br />Reading Needs </p>
<p className="mt-11 bg-gray-100">This allows the element to grow and fill available space inside its flex container. This allows the element to grow and fill available space inside its flex container.</p>
    </div>

<div className=" mt-11 flex items-center bg-gray-100">
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

  <img src="img2.jpg"
       className="w-36 h-52 object-cover transform -rotate-3 scale-95 opacity-90 transition duration-300 hover:scale-100 hover:rotate-0" />

  <img src="img3.jpg"
       className="w-44 h-64 object-cover z-10 shadow-xl transform scale-105 transition duration-300" />

  <img src="img4.jpg"
       className="w-36 h-52 object-cover transform rotate-3 scale-95 opacity-90 transition duration-300 hover:scale-100 hover:rotate-0" />
  <img src="img5.jpg"
       className="w-32 h-48 object-cover transform rotate-6 scale-90 opacity-80 transition duration-300 hover:scale-95 hover:rotate-0" />
</div>
</div>

<div className="bg-gray-100 text-center">
  Recommended Books
  <div className="flex flex-col md:flex-row gap-4">
  <div className="card w-72">
  <img src="..." className="card-img-top  bg-white" alt="..."/>
  <div className="card-body  bg-white">
    <h5 className="card-title  bg-white">Card title</h5>
    <p className="card-text  bg-white">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
 <div className="card w-72">
  <img src="..." className="card-img-top  bg-white" alt="..."/>
  <div className="card-body  bg-white">
    <h5 className="card-title  bg-white">Card title</h5>
    <p className="card-text  bg-white">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card w-72">
  <img src="..." className="card-img-top  bg-white" alt="..."/>
  <div className="card-body  bg-white">
    <h5 className="card-title  bg-white">Card title</h5>
    <p className="card-text  bg-white">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card w-72">
  <img src="..." className="card-img-top  bg-white" alt="..."/>
  <div className="card-body  bg-white">
    <h5 className="card-title  bg-white">Card title</h5>
    <p className="card-text  bg-white">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>

  
    </div>
    </div>
    </div>


    </>
  )
}
