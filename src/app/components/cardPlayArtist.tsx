import Image from "next/image"
import ButtonPlay from "./buttonPlay"


const CardPlayArtist = (props: any) => {
    return (
        <div className='group relative min-w-fit bg-zinc-600/50 hover:bg-zinc-500 rounded-md pr-4 flex items-center gap-1 hover:cursor-pointer overflow-hidden transition-all duration-500 ease-in-out'>
            <Image className="row-span-3"
                src={props.img}
                width={'104'}
                height={'104'}
                alt={props.alt}
                style={{
                    width: '80px',
                    height: 'auto'


                }}
            />
            <div className="h-20 text-lg text-left font-bold p-2 flex items-center justify-center sm:text-base sm:font-semibold lg:text-lg lg:font-bold overflow-clip">
                <p className=' overflow-clip'> {props.children}</p>
            </div>

            <div className="text-center rounded-full absolute right-2 bg-transparent scale-0 group-hover:scale-100 transition-all duration-200 ease-linear">
                <ButtonPlay />
            </div>
        </div>
    )
}

export default CardPlayArtist;