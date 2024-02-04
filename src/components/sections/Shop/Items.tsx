import React from 'react'
import ItemCard from '../Home/components/ItemCard'
import {allProducts} from "@/store/SotorageOfProducts"
const Items = () => {
  return (
    <div className='className="w-full flex flex-col justify-start items-center mt-[40px] px-[35px] mb-[85px]'>
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
        <div className="flex flex-col w-full items-center l2:flex-row l2:justify-between">
            <div className="flex flex-col justify-between sml2:flex-row sml2:w-[590px] sm:w-[640px] l2:hidden">
                <ItemCard count={1} id={allProducts[4].id} price={allProducts[4].price} description={allProducts[4].description} name={allProducts[4].name}/>
                <ItemCard count={1} id={allProducts[5].id} price={allProducts[5].price} description={allProducts[5].description} name={allProducts[5].name}/>
            </div>
            <div className="flex flex-col justify-between sml2:flex-row sml2:w-[590px] sm:w-[640px] l2:hidden">
              <ItemCard count={1} id={allProducts[6].id} price={allProducts[6].price} description={allProducts[6].description} name={allProducts[6].name}/>
              <ItemCard count={1} id={allProducts[7].id} price={allProducts[7].price} description={allProducts[7].description} name={allProducts[7].name}/>
            </div>
            <div className="hidden l2:flex"><ItemCard count={1} id={allProducts[4].id} price={allProducts[4].price} description={allProducts[4].description} name={allProducts[4].name}/></div>
            <div className="hidden l2:flex"><ItemCard count={1} id={allProducts[5].id} price={allProducts[5].price} description={allProducts[5].description} name={allProducts[5].name}/></div>
            <div className="hidden l2:flex"><ItemCard count={1} id={allProducts[6].id} price={allProducts[6].price} description={allProducts[6].description} name={allProducts[6].name}/></div>
            <div className="hidden l2:flex"><ItemCard count={1} id={allProducts[7].id} price={allProducts[7].price} description={allProducts[7].description} name={allProducts[7].name}/></div>
        </div>
        <div className="flex flex-col w-full items-center l2:flex-row l2:justify-between">
            <div className="flex flex-col justify-between sml2:flex-row sml2:w-[590px] sm:w-[640px] l2:hidden">
                <ItemCard count={1} id={allProducts[8].id} price={allProducts[8].price} description={allProducts[8].description} name={allProducts[8].name}/>
                <ItemCard count={1} id={allProducts[9].id} price={allProducts[9].price} description={allProducts[9].description} name={allProducts[9].name}/>
            </div>
            <div className="flex flex-col justify-between sml2:flex-row sml2:w-[590px] sm:w-[640px] l2:hidden">
              <ItemCard count={1} id={allProducts[10].id} price={allProducts[10].price} description={allProducts[10].description} name={allProducts[10].name}/>
              <ItemCard count={1} id={allProducts[11].id} price={allProducts[11].price} description={allProducts[11].description} name={allProducts[11].name}/>
            </div>
            <div className="hidden l2:flex"><ItemCard count={1} id={allProducts[8].id} price={allProducts[8].price} description={allProducts[8].description} name={allProducts[8].name}/></div>
            <div className="hidden l2:flex"><ItemCard count={1} id={allProducts[9].id} price={allProducts[9].price} description={allProducts[9].description} name={allProducts[9].name}/></div>
            <div className="hidden l2:flex"><ItemCard count={1} id={allProducts[10].id} price={allProducts[10].price} description={allProducts[10].description} name={allProducts[10].name}/></div>
            <div className="hidden l2:flex"><ItemCard count={1} id={allProducts[11].id} price={allProducts[11].price} description={allProducts[11].description} name={allProducts[11].name}/></div>
        </div>
        <div className="flex flex-col w-full items-center l2:flex-row l2:justify-between">
            <div className="flex flex-col justify-between sml2:flex-row sml2:w-[590px] sm:w-[640px] l2:hidden">
                <ItemCard count={1} id={allProducts[12].id} price={allProducts[12].price} description={allProducts[12].description} name={allProducts[12].name}/>
                <ItemCard count={1} id={allProducts[13].id} price={allProducts[13].price} description={allProducts[13].description} name={allProducts[13].name}/>
            </div>
            <div className="flex flex-col justify-between sml2:flex-row sml2:w-[590px] sm:w-[640px] l2:hidden">
              <ItemCard count={1} id={allProducts[14].id} price={allProducts[14].price} description={allProducts[14].description} name={allProducts[14].name}/>
              <ItemCard count={1} id={allProducts[15].id} price={allProducts[15].price} description={allProducts[15].description} name={allProducts[15].name}/>
            </div>
            <div className="hidden l2:flex"><ItemCard count={1} id={allProducts[12].id} price={allProducts[12].price} description={allProducts[12].description} name={allProducts[12].name}/></div>
            <div className="hidden l2:flex"><ItemCard count={1} id={allProducts[13].id} price={allProducts[13].price} description={allProducts[13].description} name={allProducts[13].name}/></div>
            <div className="hidden l2:flex"><ItemCard count={1} id={allProducts[14].id} price={allProducts[14].price} description={allProducts[14].description} name={allProducts[14].name}/></div>
            <div className="hidden l2:flex"><ItemCard count={1} id={allProducts[15].id} price={allProducts[15].price} description={allProducts[15].description} name={allProducts[15].name}/></div>
        </div>
    </div>
  )
}

export default Items