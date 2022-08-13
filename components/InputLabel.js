export default function InputLabel({
  name,
  type,
  placeholder,
  singleSelect,
  selectOptions,
}) {
  return singleSelect ? (
    <SelectLabel
      name={name}
      placeholder={placeholder}
      selectOptions={selectOptions}
    />
  ) : (
    <div className='flex justify-space-between items-center w-full'>
      <label htmlFor='name-with-label' className='text-gray-700 mx-2'>
        {name}
      </label>
      <input
        type={type}
        id='name-with-label'
        className=' rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600-600 focus:border-transparent'
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

function SelectLabel({ name, selectOptions }) {
  return (
    <div className='flex justify-space-between items-center w-full p-2'>
      <label className='text-gray-700 mx-2' htmlFor='selectParameters'>
        {name}
      </label>
      <select
        id='aselectParameters'
        className='block  py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 flex-1'
        name='animals'>
        <option value=''>Select {name} status</option>
        {selectOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
