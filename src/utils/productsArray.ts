export type ProductProps = {
    id: number
    title: string
    desc: string    
    price: number  
}


                
              

const productsArray:ProductProps[] = [
    {
        id:1,
        title: "iPhone 12",
        desc: "This is iPhone 12 ...",        
        price: 750       
    },
    {
        id:2,
        title: "iPhone 8",
        desc: "This is iPhone 8 ...",        
        price: 850
    },
    {
        id:3,
        title: "iPhone X",
        desc: "This is iPhone X ...",        
        price: 1250
    }   
]

export const getProductsObject = (array:ProductProps[]) => array.reduce((object,product) => ({
    ...object,
    [product.id]:product
}),{})


export default productsArray