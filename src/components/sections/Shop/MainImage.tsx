import Image from "next/image"
import bacg from "./assets/img.jpg"
const MainImage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[316px] relative">
        <Image src={bacg} alt="bacground" className="object-cover w-full h-full"/>
        <h1 className="text-black text-[48px] absolute font-[500] mont">Магазин</h1>
    </div>
  )
}

export default MainImage