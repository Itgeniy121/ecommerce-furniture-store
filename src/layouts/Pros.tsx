import Image from "next/image"
import cup from "@/assets/cup.svg"
import garant from "@/assets/garant.svg"
import ship from "@/assets/shipping.svg"
import support from "@/assets/support.svg"
const Pros = () => {
  return (
    <div className="w-full pt-[50px] flex items-start xsml:pl-[25%] justify-center flex-col bg-[#FAF3EA] ipad:flex-row ipad:justify-between ipad:pl-[30px] ipad:py-[100px] ipad:h-[270px] pl-[10px]">
        <div className="flex flex-row w-[347px] h-[70px] mb-[40px]">
            <Image src={cup} alt="icon"/>
            <div className="ml-[10px] flex flex-col">
              <h1 className="text-[25px] text-[#242424] font-[600] mont">Высокое качество</h1>
              <p className="text-[18px] font-[500] text-[#898989] mont">Каждая модель Handmade</p>
            </div>
        </div>
        <div className="flex flex-row w-[290px] h-[70px] mb-[40px]">
            <Image src={garant} alt="icon"/>
            <div className="ml-[10px] flex flex-col">
              <h1 className="text-[25px] text-[#242424] font-[600] mont">Гарантия</h1>
              <p className="text-[18px] font-[500] text-[#898989] mont">Свыше двух лет</p>
            </div>
        </div>
        <div className="flex flex-row w-[340px] h-[70px] mb-[40px]">
            <Image src={ship} alt="icon"/>
            <div className="ml-[10px] flex flex-col">
              <h1 className="text-[25px] text-[#242424] font-[600] mont">Бесплатная доставка</h1>
              <p className="text-[18px] font-[500] text-[#898989] mont">От 15 тыс. ₽</p>
            </div>
        </div>
        <div className="flex flex-row w-[300px] h-[70px] mb-[40px]">
            <Image src={support} alt="icon"/>
            <div className="ml-[10px] flex flex-col">
              <h1 className="text-[25px] text-[#242424] font-[600] mont">Поддержка</h1>
              <p className="text-[18px] font-[500] text-[#898989] mont">24/7 на связи</p>
            </div>
        </div>
    </div>
  )
}

export default Pros