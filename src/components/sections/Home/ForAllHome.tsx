import dinig from "./assets/dinning.png"
import living from "./assets/living.png"
import bedroom from "./assets/bedroom.png"
import Image from "next/image"
const ForAllHome = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center mt-[40px] lg:px-[65px]">
        <h1 className="text-[32px] font-[700] text-[#333]">Для всего дома</h1>
        <div className=" w-full flex flex-col mt-[60px] l:flex-row l:items-center l:justify-between ">
            <div className="flex flex-col items-center l:flex-col-reverse">
                <h2 className="text-[24px] font-[600] text-[#333] py-[16px]">Кухня</h2>
                <Image alt="bg" src={dinig} className="w-[375px] h-[480px]"/>
            </div>
            <div className="flex flex-col items-center l:flex-col-reverse">
                <h2 className="text-[24px] font-[600] text-[#333] py-[16px]">Гостинная</h2>
                <Image alt="bg" src={living} className="w-[375px] h-[480px]"/>
            </div>
            <div className="flex flex-col items-center l:flex-col-reverse">
                <h2 className="text-[24px] font-[600] text-[#333] py-[16px]">Спальня</h2>
                <Image alt="bg" src={bedroom} className="w-[375px] h-[480px]"/>
            </div>
        </div>
    </div>
  )
}

export default ForAllHome