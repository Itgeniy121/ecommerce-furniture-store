import Image from "next/image"
import bacg from "../Shop/assets/img.jpg"
import logo from "@/assets/logo.png"
const MainImage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[316px] relative">
        <Image src={bacg} alt="bacground" className="object-cover w-full h-full"/>
        <Image src={logo} alt="logo" className="absolute top-[30%]"/>
        <h1 className="text-black text-[48px] absolute font-[500] mont">Оплата</h1>
    </div>
  )
}

export default MainImage