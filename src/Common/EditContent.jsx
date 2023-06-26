import React from "react";

function EditContent() {
  return (
    <>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full "
        
      />
      <div className="flex justify-evenly mt-4">
      <button className="border w-20 h-10 border-zinc-400 rounded-md">Save</button>
      <button className="border w-20 h-10 border-zinc-400 rounded-md">Cancel</button>
      </div>
      
    </>
  );
}

export default EditContent;
