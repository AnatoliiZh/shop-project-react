type ProductProps = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
}

const productsArray:ProductProps[] = [
    {
    title: "Iphone 14",
    desc: "bla-bla",
    type: "phone",
    capacity: "64",
    price: 500
},
{
    title: "Iphone 12",
    desc: "bla-bla",
    type: "phone",
    capacity: "128",
    price: 1500
},{
    title: "Iphone 13",
    desc: "bla-bla",
    type: "phone",
    capacity: "32",
    price: 250
},{
    title: "Iphone 10",
    desc: "bla-bla",
    type: "phone",
    capacity: "16",
    price: 100
}

]

export default productsArray