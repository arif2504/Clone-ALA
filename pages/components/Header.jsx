import Head from 'next/head'

export default function Header () {
     return (
          <div className="header w-full bg-gray-600 text-light pl-28 pr-28 pt-10">
               <div className="overlay"></div>
               <p className='text-7xl font-bold text-light leading-tight pt-12 text-center'>Memberdayakan Pasar Tradisional</p>
               <p className="leading-normal text-lg text-light pt-7 text-center max-w-screen-md m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam maiores deleniti dignissimos nostrum atque odit accusantium totam! Ratione ex, quae repellat nihil, reprehenderit temporibus nostrum dolorem doloribus omnis soluta blanditiis.</p>
               <div className="text-center mt-10">
               <button className="w-auto p-3 bg-yellow-300 rounded-lg hover:bg-yellow-500">
                    <p className="font-semibold text-center text-lg">Go to Product</p>
               </button>
               </div>
          </div>
     )
}