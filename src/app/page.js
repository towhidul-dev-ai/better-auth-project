import Image from "next/image";
import baseUrl from "../services/baseUrl";
import ProductCard from "../components/ProductCard";
import AllProducts from "../components/AllProducts";

const getProduct = async ()=>{
  const res = await fetch(`${baseUrl}/api/products`)
    const data = await res.json();
    return data;
}

export default async function Home() {

  const products = await getProduct();

  const downProducts = products.filter(p=> p.trend == 'down');
  console.log(downProducts)

  return (
    <div className="w-full max-w-7xl mx-auto space-y-2">
     {/* down products */}
     <div>
      <p>Down Products</p>
      <div>
        <div className='grid grid-cols-4 gap-6'>
                     {
                        downProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                     }
                </div>
      </div>
     </div>
    {/* All Products */}
      <div>
        <AllProducts products={products}></AllProducts>
      </div>
    </div>
  );
}
