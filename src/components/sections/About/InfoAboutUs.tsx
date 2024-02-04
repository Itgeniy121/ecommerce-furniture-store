import Image from "next/image"
import phone from "./assets/phone.svg"
import point from "./assets/point.svg"
import clock from "./assets/clock.svg"
const InfoAboutUs = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-[70px]">
        <div className="w-[330px] mt-[100px] flex flex-col justify-center items-center pl-[2%]">
            <div className="flex flex-row items-start justify-start w-full">
                <Image src={point} alt="point"/>
                <div className="flex flex-col ml-[20px]">
                    <h1 className="text-[24px] text-[black] font-[500] mont">Адрес</h1>
                    <p className="text-[16px] text-[black] font-[400] mont">Санкт-Петербург, просп. Маршала Блюхера, 8к1,</p>
                </div>
            </div>
            <div className="flex flex-row items-start justify-start mt-[42px] w-full">
                <Image src={phone} alt="phone"/>
                <div className="flex flex-col ml-[20px]">
                    <h1 className="text-[24px] text-[black] font-[500] mont">Телефон</h1>
                    <p className="text-[16px] text-[black] font-[400] mont">+7 (994) 139-52-47</p>
                </div>
            </div>
            <div className="flex flex-row items-start justify-start mt-[42px] w-full">
                <Image src={clock} alt="clock"/>
                <div className="flex flex-col ml-[20px]">
                    <h1 className="text-[24px] text-[black] font-[500] mont">Часы работы</h1>
                    <p className="text-[16px] text-[black] font-[400] mont">Пн-Пт: 9:00 - 22:00</p>
                    <p className="text-[16px] text-[black] font-[400] mont">Сб-Вс: 10:00 - 20:00</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoAboutUs