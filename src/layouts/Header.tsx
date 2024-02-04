'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import cart from "@/assets/cart.svg"
import logo from "@/assets/logo.png"
const Header = () => {
  // const [countOfItemsInCart, setCountOfItemsInCart] = useState(getCountOfItems())
  const router = useRouter()
  const goToCart = () =>{
    router.push("/cart")
  }
  return (
    <>
    <div className='w-full h-[100px] flex flex-row justify-between items-center pl-[10px] pr-[10px] py-[30px] mm:pl-[54px] mm:pr-[100px]'>
        <div className='flex flex-row justify-center items-center'>
            <Image src={logo} alt='logo' className='w-[50px] h-[32px]'/>
            <h1 className='hidden text-[18px] mont font-[700] ml-[5px] sml:flex s:text-[28px]'>Фурнитура</h1>
        </div>
        <div className='flex flex-row justify-between items-center w-[220px] h-[30px] mm:w-[280px]'>
            <Link className='mont font-[500] text-[14px] mm:text-[16px] hover:underline duration-300' href="/">Главная</Link>
            <Link className='mont font-[500] text-[14px] mm:text-[16px] hover:underline duration-300' href="/shop">Каталог</Link>
            <Link className='mont font-[500] text-[14px] mm:text-[16px] hover:underline duration-300' href="/about">Контакты</Link>
        </div>
        <div onClick={goToCart} className='cursor-pointer flex flex-row'>
            <Image src={cart} alt='logo' className='w-[20px] h-[20px] cursor-pointer hover:w-[23px] hover:h-[23px] duration-300'/>
            {/* <p className='text-[#9F9F9F] text-[13px] font-[400] ml-[10px]'>{countOfItemsInCart} шт.</p> */}
        </div>
    </div>
    </>
  )
}

export default Header