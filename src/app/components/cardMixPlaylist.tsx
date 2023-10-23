import Image from "next/image"
import ButtonPlay from "./buttonPlay";

export default (props: any) => {
    let radiusBorder = props.rb == null ? '8px' : props.rb;
    return (
        <div className={`group p-3 bg-zinc-900 hover:bg-zinc-500 rounded-md flex flex-col items-center justify-center overflow-hidden hover:cursor-pointer transition-all duration-200 ease-in-out ${props.disable}`}>

            <div className="relative">
                <Image className=""
                    src={props.img}
                    width={'204'}
                    height={'204'}
                    alt={props.alt}
                    style={{
                        borderRadius: radiusBorder

                    }}>
                </Image>

                <button className="w-16 h-16 absolute bottom-1 right-1 bg-transparent -z-10 translate-y-10 scale-0 group-hover:z-10 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-200 ease-linear">
                    <ButtonPlay/>
                </button>
            </div>

            <div className="overflow-hidden text-lg text-left font-bold sm:text-base sm:font-semibold lg:text-lg lg:font-bold mt-2">
                <div >
                    {props.children}
                </div>

                <p className="text-sm font-semibold text-zinc-400 mt-1 mb-1">{props.description}</p>
            </div>

        </div>
    )
}