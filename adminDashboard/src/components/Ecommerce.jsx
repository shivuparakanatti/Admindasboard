import React from 'react'
import { earningData } from '../assets/data/dummy'
const Ecommerce = () => {
    console.log('hiii')
  return (
   <div className='z-10000 mx-[30%] my-10'>
    <div className='flex gap-40 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
            earningData.map((ele,i)=>{
                return (
                    <div key={i} className='flex flex-col justify-center items-center mx-4'>
                        <button className='text-4xl p-2' style={{color : ele.iconColor, background : ele.iconBg} }> {ele.icon}</button>
                        <button className='text-black '> {ele.amount}</button>
                        <button className='text-black '> {ele.title} {ele.percentage}</button>
                       
                   </div>
                )
            })
        }

    </div>
    <div className='py-10'>
        <h1 className='text-4xl'>Revunue Updates</h1>
        <div className='px-4'>
            <div className='flex flex-col gap-4'>
                <div className='py-4'>
                <h2 className='text-3xl font-bold'>93,432$</h2>
                <p className='text-sm font-thin'>Budget</p>
                </div>
                <div>
                <h2 className='text-3xl font-bold'>48,432$</h2>
                <p className='text-sm font-thin'>Expense</p>
                
                </div>

            </div>

        </div>
    </div>
   </div>
  )
}

export default Ecommerce