import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList } from "@/components/ui/tabs";
import { TabsContent, TabsTrigger } from "@radix-ui/react-tabs";

export default function Home() {
  return (
    <>
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
        <div className="mt-8 lg:mt-0">
          <Image
            alt="Pizza Main"
            src="/pizaa.jpg"
            width={400}
            height={400}
            className="w-full max-w-sm mx-auto lg:max-w-md"
            priority
          />
        </div>
      </div>
      </section>
      <section>
        <div className="container py-12">
          <Tabs defaultValue="pizaa" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="pizaa" className="text-md">pizaa</TabsTrigger>
      <TabsTrigger
                className="text-md"
                value="beverages">Beverages</TabsTrigger>
  </TabsList>
  <TabsContent value="pizaa">Pizza list</TabsContent>
  <TabsContent value="beverages">beverages list.</TabsContent>
</Tabs>
        </div>
      </section>
    </>
   
  );
}

