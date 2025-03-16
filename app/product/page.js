import ProductButton from "./product.js"; 

async function productList() {
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json(); // Await the JSON data
    return data.products;
}

export default async function Product() {
    let products = await productList();
    
    return (
        <div>
            <h1>Product list</h1>
            {
                products.map((item) =>  
                    <div key={item.id}> {/* Added key prop here */}
                        <h1>Name: {item.title}</h1>  
                        <ProductButton price={item.price} />
                    </div>
                )
            }
        </div>
    )
}
