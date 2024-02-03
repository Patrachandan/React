"use client";
import { Mandali } from "next/font/google";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const sumbitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  const deleteHandler =(i) =>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }
  let renderTask = <h2 className='text-center'> No Task Available</h2>;
  if(mainTask.length > 0){
    renderTask = mainTask.map((t, i) => {
      return (
        <li key= {i} className='flex-items-center justify-between mb-8'>
          <div className="flex items-center justify-between w-2/3">
            <h5 className="text-2xl font-semibold justify-between w-2/3">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
            <button  onClick={()=>{
              deleteHandler(i)
            }}className="bg-red-600 text-white px-4 py-2 rounded font-bold mx-px-100">Delete</button>

            <button className="bg-green-600 text-black px-4 py-2 rounded font-bold ">Complete</button>
          </div>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        Chandan's TodoList
      </h1>
      <form onSubmit={sumbitHandler}>
        <input
          type="text"
          className=" text-2xl border-4 border-zinc-800 m-5 px-4 py-2"
          placeholder="Enter Tile Here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className=" text-2xl border-4 border-zinc-800 m-5 px-4 py-2"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="m-5 bg-black text-white px-4 py-2 text-2xl font-bold rounded">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
