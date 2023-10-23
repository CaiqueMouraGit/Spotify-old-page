import { Search} from 'lucide-react'

export default () => {
    return (
        <label className='hidden flex justify-center items-center bg-white rounded-full px-2 py-1 border-2 border-transparent focus-within:border-blue-500 overflow-hidden sm:flex'>
        <Search className='text-black'></Search>
        <input type='text' className='text-black outline-none pl-2'></input>
      </label>
    )
}