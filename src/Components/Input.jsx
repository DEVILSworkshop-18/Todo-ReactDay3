import React, { useState } from "react";

const Input = ({ addTodo, title, setTitle, desc, setDesc ,setStatus, status}) => {
  const handleSubmit = () => {
    if ((title, desc === "")) {
      alert("Enter Title and Description");
    } else {
      addTodo(title, desc , status);
    }

    setTitle("");
    setDesc("");
    setStatus("notCompleted")
  };
  return (
    <>
    <div className="d-flex flex-wrap  justify-content-around  fs-4 pb-4">
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        className="border border-0 rounded-2 p-2"
        onChange={(ele) => setTitle(ele.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Decscription"
        value={desc}
         className="border border-0 rounded-2 p-2"
        onChange={(ele) => setDesc(ele.target.value)}
      />
      <button  className="btn btn-success border border-0 rounded-2 p-2" onClick={handleSubmit}>Add Todo</button>
    </div>
    </>
  );
};

export default Input;
