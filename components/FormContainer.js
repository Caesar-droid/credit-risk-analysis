import React from "react";
import Form from "./Form";

export default function FormContainer() {
  return (
    <div className='flex flex-wrap w-full mb-4' id='analysisForm'>
      <div className='flex flex-col w-full md:w-1/2 mt-4'>
        <div className='flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24'>
          <a href='#' className='p-4 text-xl font-bold text-white bg-blue-600'>
            Credit Risk Analysis
          </a>
        </div>
        <Form />
      </div>
      <div className='w-1/2 shadow-2xl'>
        <img
          className='hidden object-cover w-full h-screen md:block'
          src='https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        />
      </div>
    </div>
  );
}
