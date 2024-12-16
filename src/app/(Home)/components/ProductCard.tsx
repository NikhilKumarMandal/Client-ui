import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import Image from "next/image";
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,

  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';


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
        <Dialog>
  <DialogTrigger className="bg-green-200 hover:bg-green-300 text-green-600 px-6 py-2 rounded-full shadow-md transition">Choose</DialogTrigger>
  <DialogContent className='max-w-3xl p-0'>
            <div className=' flex'>
              <div className='w-1/3 bg-white rounded p-8 flex items-center justify-center'>
                <Image src={'/'} width={450} height={450} alt={ product.name} />
              </div>
              <div className='w-2/3 p-8'>
                <h3 className='text-xl font-bold'>{product.name}</h3>
                <p className='mt-1'>{product.description}</p>
                <RadioGroup className="grid grid-cols-3 gap-4 mt-2">
                                      
                                 
                                                <div >
                                                    <RadioGroupItem
                                                        value={""}
                                                        id={""}
                                                        className="peer sr-only"
                                                        aria-label={""}
                                                    />
                                                    <Label
                                                        htmlFor={""}
                      className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                                           </Label>
                  </div>
                                          
                                      
              </RadioGroup>
              </div>
    </div>
  </DialogContent>
</Dialog>
      </CardFooter>
    </Card>
  );
}

export default ProductCard