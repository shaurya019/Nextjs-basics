async function productList () {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
}
export default async function ProductData() {
  let products = await productList();
  return (
   <>
   <h1>Data List</h1>
   {
    products.map((x)=>{
        return <h5>Name-{x.title}</h5>
    })
   }
   </>
  );
}
