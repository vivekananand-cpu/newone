import React from 'react'
import ReactDOM from "react-dom";
import { XIcon, DotsHorizontalIcon } from "@heroicons/react/outline";


const DetailsModal = ({ modal, setModal }) => {
    if (!modal) return null;
    return ReactDOM.createPortal(
        <div>
            <div className="fixed flex justify-center items-center top-0 bottom-0 right-0 z-[50]  left-0 bg-black/20"></div>
            <div className="fixed z-[60]  top-[10px] left-[20px] right-[20px] bottom-[10px] h[100vh] w-[100vw] flex items-center justify-center">
                <div className="rounded-xl absolute h-[50%] w-[40%] bg-white ">
                    <div className="flex justify-end">
                        <XIcon onClick={() => setModal(!modal)} className="h-8 m-3  hover:scale-110 cursor-pointer transtion-all duration-500 ease-out" />
                    </div>
                    <div className="w-[90%] flex flex-col h-[60%] overflow-auto pl-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vitae pariatur necessitatibus ut amet, quae, possimus corrupti error impedit at dolore magnam? Repellat tenetur nihil beatae ad fuga similique. Reprehenderit quae, natus suscipit rem consequatur facere modi nihil accusamus doloremque. Reiciendis quod, non veniam cupiditate delectus consectetur eum placeat dolore laboriosam dicta! Molestiae veniam eius blanditiis amet nesciunt, reiciendis vitae sunt asperiores. Impedit pariatur cumque optio eius eveniet atque voluptatibus quaerat quod nisi. Voluptatum reprehenderit nobis, illum eum inventore architecto, eos possimus incidunt tempora quibusdam, et repudiandae odit fuga hic ullam cum beatae doloremque? Quis harum quasi voluptatem voluptate numquam!
                    </div>
                    <div className="h-[20%] flex items-end justify-end pr-4 w-full ">
                        <button onClick={() => setModal(!modal)} className="rounded-lg w-[100px] text-white hover:shadow-md active:scale-105 p-2 bg-blue-500 transition-all transform duration-300 ease-out">Ok</button>

                    </div>

                </div>

            </div>


        </div>,
        document.getElementById("portal")
    )
}

export default DetailsModal
