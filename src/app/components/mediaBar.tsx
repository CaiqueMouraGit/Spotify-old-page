import Image from "next/image"
import { AiFillPlayCircle, AiFillStepBackward, AiFillStepForward } from 'react-icons/ai'
import { PiShuffle, PiRepeatFill } from 'react-icons/pi'
import { BiSolidVolumeFull } from 'react-icons/bi'
import { TbDevices2, TbMicrophone2 } from 'react-icons/tb'
import { HiOutlineMenu } from 'react-icons/hi'


const MediaBar = () => {
    return (
        <>
            <div className="flex justify-center md:justify-between">
                <div className="gap-4 items-center hidden md:flex">
                    <Image className="cursor-pointer"
                        src={"/JoshuaTree-Deluxe.jpg"}
                        width={'62'}
                        height={'62'}
                        alt={'cover playerSong'}
                        style={{
                            borderRadius: '8px'

                        }}>
                    </Image>
                    <div>
                        <h2 className="font-semibold hover:underline cursor-pointer">Running To Stand Still</h2>
                        <p className="text-xs hover:underline cursor-pointer">U2</p>
                    </div>
                </div>

                <div className="max-w-screen-2xl flex flex-col gap-1">
                    <div className="flex items-center justify-center gap-4 text-3xl">
                        <PiShuffle className="text-zinc-400 hover:text-white" />
                        <AiFillStepBackward className="text-zinc-400 hover:text-white" />
                        <AiFillPlayCircle className="text-5xl hover:scale-110" />
                        <AiFillStepForward className="text-zinc-400 hover:text-white" />
                        <PiRepeatFill className="text-zinc-400 hover:text-white" />
                    </div>

                    <div className="flex flex-shrink items-center justify-center gap-2">
                        <div>0:02</div>
                        <div className="w-72 md:w-[512px] border-2 border-zinc-400 rounded-md"></div>
                        <div>4:17</div>
                    </div>
                </div>

                <div className=" items-center justify-center gap-4 text-lg hidden md:flex">
                    <TbMicrophone2 className="text-zinc-400 hover:text-white cursor-pointer" />
                    <HiOutlineMenu className="text-zinc-400 hover:text-white cursor-pointer" />
                    <TbDevices2 className="text-zinc-400 hover:text-white cursor-pointer" />

                    <div className="flex items-center justify-center text-zinc-400 hover:text-white gap-2">
                        <BiSolidVolumeFull />
                        <div className="w-20 border-2 border-white rounded-md"></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MediaBar;