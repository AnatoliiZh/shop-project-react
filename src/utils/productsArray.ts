type ProductProps = {
    id: number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
}

const productsArray:ProductProps[] = [
    {
        id:1,
    title: "Iphone 14",
    desc: "bla-bla",
    type: "phone",
    capacity: "64",
    price: 500
    },
    {
        id:2,
        title: "Iphone 12",
        desc: "bla-bla",
        type: "phone",
        capacity: "128",
        price: 1500
    },
    {
        id:3,
        title: "Iphone 13",
        desc: "bla-bla",
        type: "phone",
        capacity: "32",
        price: 250
    },
    {
        id:4,
        title: "Iphone 6",
        desc: "bla-bla",
        type: "phone",
        capacity: "16",
        price: 60
    },
    {
        id:5,
        title: "Iphone 5",
        desc: "bla-bla",
        type: "phone",
        capacity: "16",
        price: 50
    },
    {
        id:6,
        title: "Iphone 8",
        desc: "bla-bla",
        type: "phone",
        capacity: "16",
        price: 80
    }
]

export default productsArray