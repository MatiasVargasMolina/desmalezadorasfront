import { useState } from 'react'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import cilindro from "../assets/cilindro.jpg"
function Home() {

  return (
    <>
      <Navbar></Navbar>
      <div className='flex justify-center items-center sm:flex flex-col md:flex-col lg:flex-row'>
        <h1 class="text-center text-4xl font-comfortaa leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Repuestos</h1>
        <h1 class="text-center font-font-comfortaa text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white m-4  py-2 px-2 text-white bg-green-500 rounded dark:bg-blue-500">Desmalezadora / <span className='border-black border-solid   '>Desbrozadora</span></h1></div>
      <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"></p>

      <div className='flex pt-6 items-center justify-center'>
        <div className='flex flex-wrap w-4/5 justify-around pb-4'>
          <Product className="min-w-1 pb-4 mr-4 mb-4" img={cilindro} name="Cilindro Y Piston Desmalezador China 52cc" price="19.990"></Product>
          <Product className="min-w-1 mr-4 mb-4" img={cilindro} name="Cilindro Y Piston Desmalezador China 52cc" price="19.990"></Product>
          <Product className="min-w-1 mr-4 mb-4" img={cilindro} name="Cilindro Y Piston Desmalezador China 52cc" price="19.990"></Product>
          <Product className="min-w-1 mr-4 mb-4" img={cilindro} name="Cilindro Y Piston Desmalezador China 52cc" price="19.990"></Product>
          <Product className="min-w-1 mr-4 mb-4" img={cilindro} name="Cilindro Y Piston Desmalezador China 52cc" price="19.990"></Product>
          <Product className="min-w-1 mr-4 mb-4" img={cilindro} name="Cilindro Y Piston Desmalezador China 52cc" price="19.990"></Product>
          <Product className="min-w-1 mr-4 mb-4" img={cilindro} name="Cilindro Y Piston Desmalezador China 52cc" price="19.990"></Product>
          <Product className="min-w-1 mr-4 mb-4" img={cilindro} name="Cilindro Y Piston Desmalezador China 52cc" price="19.990"></Product>
          <Product className="min-w-1 mr-4 mb-4" img={cilindro} name="Cilindro Y Piston Desmalezador China 52cc" price="19.990"></Product>
          <Product className="min-w-1 mr-4 mb-4" img={cilindro} name="Cilindro Y Piston Desmalezador China 52cc" price="19.990"></Product>
          <Product className="min-w-1 mr-4 mb-4" img={cilindro} name="Cilindro Y Piston Desmalezador China 52cc" price="19.990"></Product>
          <Product className="min-w-1 mr-4 mb-4" img={cilindro} name="Cilindro Y Piston Desmalezador China 52cc" price="19.990"></Product>
          <Product className="min-w-1 mr-4 mb-4" img={cilindro} name="Cilindro Y Piston Desmalezador China 52cc" price="19.990"></Product>
          <Product className="min-w-1 mr-4 mb-4" img={cilindro} name="Cilindro Y Piston Desmalezador China 52cc" price="19.990"></Product>
          <Product className="min-w-1 mr-4 mb-4" img={cilindro} name="Cilindro Y Piston Desmalezador China 52cc" price="19.990"></Product>
          <Product className="min-w-1 mr-4 mb-4" img={cilindro} name="Cilindro Y Piston Desmalezador China 52cc" price="19.990"></Product>
          <Product className="min-w-1 mr-4 mb-4" img={cilindro} name="Cilindro Y Piston Desmalezador China 52cc" price="19.990"></Product>
          <Product className="min-w-1 mr-4 mb-4" img={cilindro} name="Cilindro Y Piston Desmalezador China 52cc" price="19.990"></Product>
          <Product className="min-w-1 mr-4 mb-4" img={cilindro} name="Cilindro Y Piston Desmalezador China 52cc" price="19.990"></Product>
          <Product className="min-w-1 mr-4 mb-4" img={cilindro} name="Cilindro Y Piston Desmalezador China 52cc" price="19.990"></Product>
        </div>
      </div>
    </>
  )
}

export default Home
