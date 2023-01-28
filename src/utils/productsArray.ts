export type ProductProps = {
    id: number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image:string
}

const productsArray:ProductProps[] = [
    {
        id:1,
        title: "Iphone 14",
        desc: "bla-bla",
        type: "phone",
        capacity: "64",
        price: 500,
        image:"/images/1.jpg"
    },
    {
        id:2,
        title: "Iphone 12",
        desc: "bla-bla",
        type: "phone",
        capacity: "128",
        price: 1500,
        image:"/images/2.jpg"
    },
    {
        id:3,
        title: "Iphone 13",
        desc: "bla-bla",
        type: "phone",
        capacity: "32",
        price: 250,
        image:"/images/3.jpg"
    }
]

export const getProductsObject = (array:ProductProps[]) => array.reduce((object,product) => ({
    ...object,
    [product.id]:product
}),{})


export default productsArray