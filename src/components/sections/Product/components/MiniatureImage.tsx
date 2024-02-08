import Image from "next/image";

import React, { FC } from 'react'
interface props{
    params: any
}

const MiniatureImage: FC<props> = ({params}) => {
  return (
    <Image src={`/${params}.png`} width={1000} height={1000} className="w-full h-full" alt="product"/>
  )
}

export default MiniatureImage