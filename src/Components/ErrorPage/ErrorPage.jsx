import React from 'react';
import { MdOutlineReportGmailerrorred } from "react-icons/md";

const ErrorPage = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      
      <h1 className='text-4xl text-gray-500 flex gap-2 items-center'><MdOutlineReportGmailerrorred /> Page Not Found</h1>
    </div>
  );
};

export default ErrorPage;