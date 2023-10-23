import { Search } from 'lucide-react'

const SearchMenu = () => {
  return (
    <label className='hidden justify-center items-center bg-white rounded-full px-2 py-1 border-2 border-transparent focus-within:border-blue-500 overflow-hidden sm:flex'>
      <Search className='text-black'></Search>
      <input type='text' className='text-black outline-none pl-2'></input>
    </label>
  )
}

export default SearchMenu;