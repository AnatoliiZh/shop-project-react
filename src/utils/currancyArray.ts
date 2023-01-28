export type ProductProps = {
    currency: string    
    course: number   
}

const currancyArray:ProductProps[] = [
    {
        currency: "USD",    
        course: 1 
    },
    {
        currency: "EUR",    
        course: 0.93 
    },   
    {
        currency: "UAH",    
        course: 40 
    },   
    {
        currency: "PLN",    
        course: 4.4 
    },   
] 

export default currancyArray