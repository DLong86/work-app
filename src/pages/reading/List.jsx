import React from 'react';

const List = ({ nameList, selectedName }) => {
  console.log(nameList.length);
  return (
    <div className='mt-12'>
      {selectedName && (
        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl mt-4 uppercase font-thin flex flex-col ">
            Reader {nameList.length + 1}:
          </p>
          <p className="text-6xl font-bold uppercase ">{selectedName}</p>
        </div>
      )}
     
    </div>
  );
};

export default List;