import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { IoAddCircleSharp } from 'react-icons/io5';

const Cards = ({ home, setInputDiv }) => {
    const data = [
        {
            title: "The Best Coding Channel",
            desc: "I have to create my channel the best ever coding channel in hindi.",
            status: "In Complete",
        },
        {
            title: "CPP Concepts",
            desc: "I need to clear basics of CPP. ",
            status: "Complete",
        },
        {
            title: "Assignment",
            desc: "My assignment on 30 sept. I have to complete it.",
            status: "In Complete",
        },
        {
            title: "Project",
            desc: "For Project I need to see tutorials.",
            status: "In Complete",
        },
    ]
    return (
        <div className='grid grid-cols-3 gap-4 p-4'>
            {data && data.map((items, i) => (
                <div className='bg-gray-800 rounded-sm p-4 flex flex-col justify-between'>
                    <div>
                        <h3 className='text-xl font-semibold'>{items.title}</h3>
                        <p className='text-grey-300 my-2'>{items.desc}</p>
                    </div>
                    <div className='mt-4 w-full flex items-center'>
                        <button className={`${items.status === "In Complete" ? "bg-red-400" : "bg-green-700"} p-2 rounded w-3/6`}>
                            {items.status}
                        </button>
                        <div className='text-white p-2 w-3/6 text-2xl font-semibold flex justify-around'>
                            <button><CiHeart /></button>
                            <button><FaEdit /></button>
                            <button><MdDelete /></button>
                        </div>
                    </div>
                </div>
            ))}
            {home === "true" && (
                <button className='bg-gray-800 rounded-sm p-4 flex flex-col justify-center items-center text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300' onClick={()=>setInputDiv("fixed")}>
                    <IoAddCircleSharp className='text-5xl' />
                    <h2 className='text-2xl mt-4'>Add Task</h2>
                </button>
            )}

        </div>
    )
}

export default Cards
