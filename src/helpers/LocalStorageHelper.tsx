'use client'
const getSummOfStorage = () =>{
    let items: any
    if(typeof window !== 'undefined'){
        items = JSON.parse(localStorage.getItem('products') || "[]")
    }
    if(items){
        const newItems = items.map((it: any) =>{
            return it.count * it.price
        })
        const sumOfItems = newItems.reduce((sum: any, current: any) => {
            return sum + current
        }, 0)
        return sumOfItems
    }
}

const getCountOfItems = () =>{
    let items: any
    if(typeof window !== 'undefined'){
        items = JSON.parse(localStorage.getItem('products') || "[]")
    }
    if(items){
        const countCurrentItem = items.map((it: any) => {
            return it.count
        })
        const sumOfCountOfItems = countCurrentItem.reduce((sum: any, current: any) =>{
            return sum + current
        }, 0)
        return sumOfCountOfItems
    }
}


export {getSummOfStorage, getCountOfItems}