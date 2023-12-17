import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products"
import Billboard from "@/components/billboard/Billboard";
import ProductList from "@/components/product/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const  Homepage = async () =>  {

  const products = await getProducts({isFeatured: true});

  const billboard = await getBillboard("d893d959-0f32-4472-be38-cb1d7735dcb8");
  return (
    <Container>

      <div className="space-y-10 pb-10">
          <Billboard data={billboard}/>
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8"> 
        <ProductList title="Санал болгох бүтээгдэхүүн" items={products}/>
      </div>

    </Container>
  )
}

export default Homepage;


