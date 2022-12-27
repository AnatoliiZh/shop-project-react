type ProductProps = {
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
        title: "Мобільний телефон Apple iPhone 14 Pro Max 256GB Space Black",
        desc: "bla-bla",
        type: "phone",
        capacity: "256",
        price: 500,
        image:"/images/1.jpg"
    },
    {
        id:2,
        title: "Мобільний телефон Apple iPhone 14 128GB Purple (MPV03RX/A)",
        desc: "bla-bla",
        type: "phone",
        capacity: "128",
        price: 1500,
        image:"/images/2.jpg"
    },
    {
        id:3,
        title: "Мобільний телефон Apple iPhone 14 Plus 128GB PRODUCT Red",
        desc: "bla-bla",
        type: "phone",
        capacity: "128",
        price: 250,
        image:"/images/3.jpg"
    },
    {
        id:4,
        title: "Iphone 6",
        desc: "bla-bla",
        type: "phone",
        capacity: "16",
        price: 60,
        image:"/images/4.jpg"
    },
    {
        id:5,
        title: "Iphone 5",
        desc: "bla-bla",
        type: "phone",
        capacity: "16",
        price: 50,
        image:"/images/5.jpg"
    },
    {
        id:6,
        title: "Iphone 8",
        desc: "bla-bla",
        type: "phone",
        capacity: "16",
        price: 80,
        image:"/images/6.jpg"
    }
]

export default productsArray