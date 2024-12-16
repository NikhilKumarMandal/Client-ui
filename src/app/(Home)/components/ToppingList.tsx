'use client'
import React, { useState } from 'react'
import ToppingCard, { Topping } from './ToppingCard'
const topping= [
    { id: "1", name: "chicken", image: "/chicken.png", price: 50, isAvailable: true },
    { id: "2", name: "chicken", image: "/chicken.png", price: 50, isAvailable: true },
    {id:"3",name:"chicken",image: "/chicken.png",price:50,isAvailable: true}
]
function ToppingList() {
    const [selectedToppings, setSelectedToppings] = useState([topping[0]]);

    const handleCheckBoxCheck = (topping: Topping) => {
        const isAlreadyExists = selectedToppings.some((element) => element.id === topping.id);
        if (isAlreadyExists) {
            setSelectedToppings((prev) => prev.filter(elm => elm.id !== topping.id))
            return;
        }

        setSelectedToppings((prev) => [...prev, topping])
    };
  return (
    <section className='mt-6'>
        <h3>Extra Topping</h3>
        <div className='grid grid-cols-3 gap-4 mt-2'>
            {
                  topping.map(topping => {
                      return <ToppingCard topping={topping} key={topping.id}
                          selectedTopping={selectedToppings}
                          handleCheckBoxCheck={handleCheckBoxCheck}
                      />
                })      
            }  
        </div>
    </section>
  )
}

export default ToppingList