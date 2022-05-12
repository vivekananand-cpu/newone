
import { Link, useHistory } from "react-router-dom";

import React, { useEffect, useState } from "react";

import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsModal from "./DetailsModal";

function Total_work() {

  const [modal, setModal] = useState(false);





  const [user, setUser] = useState({
    name: "", work: "", location: "", time: "", data: []

  });



  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }




  function Loaddata() {
    axios.get("/getwork")

      .then((res) => {
        console.log(res);
        setUser({ data: res.data.users });

      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    Loaddata();
  }, []);



  return (


    <>
      <div className="w-[100vw]  flex flex-col  items-center justify-center">
        <div className=" w-[50%]  mt-10">

          {user.data.map((post, pos) => (

            <div className="w-full flex items-center justify-center p-3 ">
              <div className="flex text-center justify-center w-full rounded-md shadow-md shadow-pink-200 p-3">

                <div className="flex flex-col gap-2">
                  <div>
                    <h6 className="text-gray-500">Work Required</h6>
                    <h5 className="text-2xl">{post.Work}</h5>
                  </div>
                  <div>
                    <h6 className="text-gray-500">Work Location</h6>
                    <p className="text-2xl">{post.Location}</p>
                  </div>
                  <h6 className="text-gray-500">Client Name</h6>
                  <b className="text-3xl">{post.owner}</b><br />


                  <div className="flex justify-between w-full gap-10">
                    <button onClick={() => { setModal(!modal) }} type="button" className="rounded-lg text-white hover:shadow-md active:scale-105 p-2 bg-pink-500 transition-all transform duration-300 ease-out">View Details</button>
                    <button type="button" className="rounded-lg text-white hover:shadow-md active:scale-105 p-2 bg-green-500 transition-all transform duration-300 ease-out">Apply Now</button>

                  </div>

                  <DetailsModal modal={modal} setModal={setModal} />



                </div>
              </div>

            </div>



          )
          )}
        </div>








      </div>

    </>
  );
}

export default Total_work;
