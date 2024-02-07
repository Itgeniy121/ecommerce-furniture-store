import ItemCard from "./components/ItemCard"
import { allProducts } from "@/store/SotorageOfProducts"
const OurProducts = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center mt-[40px] px-[10px] lg:px-[65px]">
        <h1 className="text-[40px] font-[700] text-[#3A3A3A] mb-[32px]">Товары для вас</h1>
        <div className="flex flex-col w-full items-center l2:flex-row l2:justify-between">
            <div className="flex flex-col justify-between sml2:flex-row sml2:w-[590px] sm:w-[640px] l2:hidden">
                <ItemCard count={1} id={allProducts[0].id} price={allProducts[0].price} description={allProducts[0].description} name={allProducts[0].name}/>
                <ItemCard count={1} id={allProducts[1].id} price={allProducts[1].price} description={allProducts[1].description} name={allProducts[1].name}/>
            </div>
            <div className="flex flex-col justify-between sml2:flex-row sml2:w-[590px] sm:w-[640px] l2:hidden">
                <ItemCard count={1} id={allProducts[2].id} price={allProducts[2].price} description={allProducts[2].description} name={allProducts[2].name}/>
                <ItemCard count={1} id={allProducts[3].id} price={allProducts[3].price} description={allProducts[3].description} name={allProducts[3].name}/>
            </div>
            <div className="hidden l2:flex"><ItemCard count={1} id={allProducts[0].id} price={allProducts[0].price} description={allProducts[0].description} name={allProducts[0].name}/></div>
            <div className="hidden l2:flex"><ItemCard count={1} id={allProducts[1].id} price={allProducts[1].price} description={allProducts[1].description} name={allProducts[1].name}/></div>
            <div className="hidden l2:flex"><ItemCard count={1} id={allProducts[2].id} price={allProducts[2].price} description={allProducts[2].description} name={allProducts[2].name}/></div>
            <div className="hidden l2:flex"><ItemCard count={1} id={allProducts[3].id} price={allProducts[3].price} description={allProducts[3].description} name={allProducts[3].name}/></div>
        </div>
        <button className="mt-[32px] w-[245px] h-[48px] border border-[#B88E2F] bg-white hover:bg-[#B88E2F] duration-300"><p className="text-[16px] text-[#B88E2F] font-[600] hover:text-white duration-300">Подробнее</p></button>
    </div>
  )
}

export default OurProducts