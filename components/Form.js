import React from "react";
import InputLabel from "./InputLabel";

export default function Form() {
  return (
    <div className='flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32'>
      <form className='flex flex-col pt-3 md:pt-8 w-full'>
        <div className='flex flex-col pt-4'>
          <div className='flex relative '>
            <InputLabel name='Loan Amount' placeholder='Amount' type='number' />
          </div>
        </div>
        <div className='flex flex-col pt-4 '>
          <div className='flex relative '>
            <InputLabel
              name='Interest Rate'
              placeholder='Interest Rate'
              type='number'
            />
          </div>
        </div>
        <div className='flex flex-col pt-4'>
          <div className='flex relative '>
            <InputLabel
              name='Home Ownership'
              singleSelect={true}
              selectOptions={["Own/Mortgage", "Rent"]}
            />
          </div>
        </div>
        <div className='flex flex-col pt-4 '>
          <div className='flex relative '>
            <InputLabel
              name='Verification Status'
              singleSelect={true}
              selectOptions={["Verified", "Not Verified"]}
            />
          </div>
        </div>
        <div className='flex flex-col pt-4 '>
          <div className='flex relative '>
            <InputLabel
              name='Period of Payment(Months)'
              placeholder='Period of Payment'
              type='number'
            />
          </div>
        </div>
        <div className='flex flex-col pt-4 '>
          <div className='flex relative '>
            <InputLabel
              name='Application Type'
              singleSelect={true}
              selectOptions={["Individual", "Group/Joint"]}
            />
          </div>
        </div>
        <button
          type='submit'
          className='w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-600 shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2'>
          <span className='w-full'>Submit For Analysis</span>
        </button>
      </form>
    </div>
  );
}
