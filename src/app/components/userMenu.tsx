import { UserCircle2, ChevronDown } from 'lucide-react'

const UserMenu = () => {
  return (
    <label className='flex justify-center items-center px-2 py-1 gap-2 hover:cursor-pointer'>
      <UserCircle2></UserCircle2>
      Zero
      <ChevronDown></ChevronDown>
    </label>
  )
}

export default UserMenu;