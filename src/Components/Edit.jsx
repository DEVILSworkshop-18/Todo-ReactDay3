import React, { useState } from "react";

const Edit = ({title , setTitle , desc , setDesc , handleEditedValue} ) => {

  return (
    <>
    <div className="d-flex flex-wrap  justify-content-around fs-4 pb-4">
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
         className="border rounded-2 p-2"
        onChange={(ele) => setTitle(ele.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Decscription"
        value={desc}
         className="border rounded-2 p-2"
        onChange={(ele) => setDesc(ele.target.value)}
      />
      <button  className="btn btn-success border rounded-2 " onClick={handleEditedValue}>Save Todo</button>
    </div>
    </>
  );
};

export default Edit;
