import { ChevronLeft, ChevronRight } from 'lucide-react'

export default () => {
    return (
        <>
            <button className='hover:bg-gray-500 p-2 rounded-full flex items-center justify-center'><ChevronLeft /></button>
            <button className='hover:bg-gray-500 p-2 rounded-full flex items-center justify-center'><ChevronRight /></button>
        </>

    )
}