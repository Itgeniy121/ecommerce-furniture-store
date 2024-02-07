import ItemCard from "../Home/components/ItemCard"
import {allProducts} from "@/store/SotorageOfProducts"
const LikedProducts = () => {
  return (
    <div className="w-full flex flex-col mt-[30px] justify-center items-center l:px-[20px] xl:px-[50px]">
        <h1 className="text-[40px] font-[700] text-[#3A3A3A] mb-[32px]">Вам понравится</h1>
        <div className="flex flex-col w-full items-center l2:flex-row l2:justify-between">
            <div className="flex flex-col justify-between sml2:flex-row sml2:w-[590px] sm:w-[640px] l2:hidden">
                <ItemCard count={1} id={allProducts[9].id} price={allProducts[9].price} description={allProducts[9].description} name={allProducts[9].name}/>
                <ItemCard count={1} id={allProducts[7].id} price={allProducts[7].price} description={allProducts[7].description} name={allProducts[7].name}/>
            </div>
            <div className="flex flex-col justify-between sml2:flex-row sml2:w-[590px] sm:w-[640px] l2:hidden">
                <ItemCard count={1} id={allProducts[11].id} price={allProducts[11].price} description={allProducts[11].description} name={allProducts[11].name}/>
                <ItemCard count={1} id={allProducts[15].id} price={allProducts[15].price} description={allProducts[15].description} name={allProducts[15].name}/>
            </div>
            <div className="hidden l2:flex"><ItemCard count={1} id={allProducts[9].id} price={allProducts[9].price} description={allProducts[9].description} name={allProducts[9].name}/></div>
            <div className="hidden l2:flex"><ItemCard count={1} id={allProducts[7].id} price={allProducts[7].price} description={allProducts[7].description} name={allProducts[7].name}/></div>
            <div className="hidden l2:flex"><ItemCard count={1} id={allProducts[11].id} price={allProducts[11].price} description={allProducts[11].description} name={allProducts[11].name}/></div>
            <div className="hidden l2:flex"><ItemCard count={1} id={allProducts[15].id} price={allProducts[15].price} description={allProducts[15].description} name={allProducts[15].name}/></div>
        </div>
    </div>
  )
}

export default LikedProducts