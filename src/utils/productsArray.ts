
type ProductProps = {
    id:number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray:ProductProps[] = [
    {
        id:1,
        title:"iPhone 14 Pro",
        desc: "This is iPhone 14 Pro",
        type:"phone",
        capacity:"256",
        price:1000,
        image:"/images/iphone-purple.jpeg"
    },
    {
        id:2,
        title:"iPhone 13 Pro",
        desc: "This is iPhone 13 Pro",
        type:"phone",
        capacity:"128",
        price:500,
        image:"/images/iphone-gold.jpeg"
    },
    {
        id:3,
        title:"iPhone 13",
        desc: "This is iPhone 13",
        type:"phone",
        capacity:"64",
        price:2000,
        image:"/images/iphone-green.jpeg"
    },
    {
        id:4,
        title:"iPhone 11 Pro",
        desc: "This is iPhone 11 Pro",
        type:"phone",
        capacity:"256",
        price:1000,
        image:"/images/iphone-white.jpeg"
    },
    {
        id:5,
        title:"iPhone 13 Pro MAX",
        desc: "This is iPhone 13 Pro MAX",
        type:"phone",
        capacity:"512",
        price:1500,
        image:"/images/iphone-red.jpeg"
    },
    {
        id:6,
        title:"iPhone X",
        desc: "This is iPhone X",
        type:"phone",
        capacity:"64",
        price:500,
        image:"/images/iphone-black.jpeg"
    },
]


export default productsArray