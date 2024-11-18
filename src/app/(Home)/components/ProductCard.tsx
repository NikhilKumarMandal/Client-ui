import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { Button } from '@/components/ui/button';

export type Product = {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number
}

type PropType = { product: Product }

function ProductCard({ product }: PropType) {
  return (
    <Card className="border-none rounded-xl shadow-md">
      <CardHeader className="flex items-center justify-center p-4">
        <Image
          alt={product.name}
          src={product.image}
          width={400}
          height={400}
          className="w-full max-w-sm mx-auto rounded-lg md:max-w-md"
          priority
        />
      </CardHeader>
      <CardContent className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
        <p className="mt-2 text-sm text-gray-600">{product.description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-center space-y-2 md:flex-row md:justify-between md:space-y-0 p-4">
        <p className="text-lg font-semibold text-gray-800">
          From <span className="text-primary">${product.price}</span>
        </p>
        <Button className="bg-green-200 hover:bg-green-300 text-green-600 px-6 py-2 rounded-full shadow-md transition">
          Choose
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard