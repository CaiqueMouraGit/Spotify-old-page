import {GrPlayFill} from 'react-icons/gr'

export default () => {
    return (
        <button className="group p-4 bg-green-500 rounded-full hover:scale-125 group-hover:shadow-md transition-all duration-100 ease-linear">
            <GrPlayFill className="group-hover:scale-125"></GrPlayFill>
        </button>
    )
}