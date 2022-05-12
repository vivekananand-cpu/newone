
import {  Link , useHistory } from "react-router-dom";

import React , {useEffect, useState } from "react";

import axios from "axios";



function Work() {



  
    const [user , setUser] = useState({
       name : "" , work:"" , location:"" , time:"",
     
       });
    
       
    
       let name,value ;
       
     const handleInputs = (e) => {
       console.log(e);
       name=e.target.name;
       value=e.target.value;
     
       setUser({ ...user , [name]:value});
     }
     
     
     
     function PostData(e){
       e.preventDefault();
       
       
      axios.post("/register" , user)
       .then(function(response){
        window.alert("Done");
       
       }).catch((err)=>{
         console.log(err);
       })

       
      
       
     }


  return (


     <>
{/* 
       
<div class="content">
  
  

  <form method="post" onSubmit={(e)=>PostData(e)}>
        <div className="name-div">		
            <input type="text" className="name" onChange={handleInputs} placeholder="Enter your Name " required={true} name="name" />
        </div>

        <div className="work-div">		
            <input type="text" className="work" onChange={handleInputs} placeholder="Enter your required work " required={true} name="work" />
        </div>

        <div className="time-div">		
            <input type="Date" className="time" onChange={handleInputs} required={true} name="time" />
        </div>

        <div className="location-div">		
            <input type="text" className="loc" onChange={handleInputs} placeholder="Location of work" required={true} name="location" />
        </div>

        <div className="submit-div">
            <input  type="submit" className="btn btn-primary" id="Aditya"/>
        
            
        </div>
    </form>

</div> */}
 <div>
              <div className="h-[100vh] w-[100vw] flex items-center justify-center " >
                      <div className=" bg-gray-50 rounded-lg shadow-xl shadow-pink-300 xl:w-[40%] lg:w-[50%] md:w-[60%] w-[90%] ">
                      <div className=" flex h-full w-full">
                    <div className=" w-full p-3 mt-6">
                        <div className="font-bold text-3xl">
                            <p>Hey,</p>
                            <p>Looking for a Worker</p>
                        </div>


                       

                        <form method="post" onSubmit={(e)=>{PostData(e)}} >
                            <div className="w-full flex flex-col space-y-2 mt-5">
                               
                                <div className="w-full">
                                    <p className="font-bold">Enter your Name</p>
                                    <input  onChange={handleInputs} name="name" required={true} className=" w-full h-[40px] text-gray-500 bg-gray-50 border-b-[2px] focus:outline-none" type="text" placeholder />
                                </div>
                                <div className="w-full">
                                    <p className="font-bold">Enter your required work</p>  
                                    <input  onChange={handleInputs} name="work" required={true} className=" w-full h-[40px] text-gray-500 bg-gray-50 border-b-[2px] focus:outline-none" type="text" placeholder />
                                </div>
                                <div className="w-full">
                                    <p className="font-bold">Date</p>
                                    <input  onChange={handleInputs} name="date" required={true} className=" w-full h-[40px] text-gray-500 bg-gray-50 border-b-[2px] focus:outline-none" type="date" placeholder />
                                </div>
                                <div className="w-full">
                                    <p className="font-bold">Location of Work</p>
                                    <input  onChange={handleInputs} name="location" required={true} className=" w-full h-[40px] text-gray-500 bg-gray-50 border-b-[2px] focus:outline-none" type="text" placeholder />
                                </div>
                               
                                <div className="w-full mb-10 p-4">
                                    <button className="bg-pink-500 text-white font-bold hover:shadow-md mt-4 transtion duration-200 ease-out hover:shadow-pink-700 rounded-xl p-3  w-full">Post a Job</button>

                                </div>
                            </div>
                        </form>
                      


                    </div>
                </div>

                      </div>
              </div>
          </div>




                   



</>
  );
}

export default Work;
