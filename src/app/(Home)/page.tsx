import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList } from "@/components/ui/tabs";
import { TabsContent, TabsTrigger } from "@radix-ui/react-tabs";
import ProductCard, { Product } from "./components/ProductCard";

const products: Product[] = [
  {
    id: '1',
    name: "hello",
    description: "THis is a ",
    image: "/pizaa.jpg",
    price: 699
  },
  {
    id: '2',
    name: "hello",
    description: "THis is a ",
    image: "/pizaa.jpg",
    price: 699
  },
  {
    id: '3',
    name: "hello",
    description: "THis is a ",
    image: "/pizaa.jpg",
    price: 699
  },
  {
    id: '4',
    name: "hello",
    description: "THis is a ",
    image: "/pizaa.jpg",
    price: 699
  }
]

export default async function Home() {
  // const categoryResponse = await fetch(``)
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between py-16 px-4 lg:px-8">
          {/* Text Content */}
          <div className="text-center lg:text-left lg:max-w-lg">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Super Delicious Pizza in <br />
              <span className="text-primary">Only 45 Minutes!</span>
            </h1>
            <p className="text-lg sm:text-xl mt-6 leading-relaxed text-gray-700">
              Enjoy a free meal if your order takes more than 45 minutes!
            </p>
            <Button className="mt-6 px-8 py-4 text-lg font-bold rounded-full bg-primary text-white hover:bg-primary-dark focus:ring focus:ring-primary-light transition">
              Get your pizza now
            </Button>
          </div>
          {/* Image */}
          <div className="mt-8 lg:mt-0 lg:max-w-md">
            <Image
              alt="Pizza Main"
              src="/pizaa.jpg"
              width={400}
              height={400}
              className="w-full max-w-sm mx-auto rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-50">
        <div className="container py-12 px-4 lg:px-8">
          <Tabs defaultValue="pizaa" className="w-full">
            <TabsList className="flex justify-center gap-4">
              <TabsTrigger
                value="pizaa"
                className="text-md font-medium text-gray-600 hover:text-primary focus:text-primary">
                Pizza
              </TabsTrigger>
              <TabsTrigger
                value="beverages"
                className="text-md font-medium text-gray-600 hover:text-primary focus:text-primary">
                Beverages
              </TabsTrigger>
            </TabsList>

            <TabsContent value="pizaa">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {products.map((item) => (
                  <ProductCard product={item} key={item.id} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="beverages">
              <div className="text-center mt-6">
                <p className="text-gray-600">Beverages list coming soon!</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}

