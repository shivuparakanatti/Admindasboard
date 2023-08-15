import React from 'react'
import { earningData } from '../assets/data/dummy'
import Chart from "chart.js/auto";
import { Line, Bar } from 'react-chartjs-2'
const Ecommerce = () => {
    const labels = ["1990", "1995", "2000", "2010", "2020", "2023"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Revenue ",
      backgroundColor: "rgb(77,195,255)",
      borderColor: "rgb(77,195,255)",
      data: [10985, 23456, 40780, 65678, 58976, 85868, 93432],
    },
    {
      label: "Budget ",
      backgroundColor: "rgb(35,41,4)",
      borderColor: "rgb(35,41,4)",
      data: [18098, 20000, 23098, 35908, 45874, 48432],
    },

  ],
};
   
    return (
   <div className='z-10000 mx-10 md:mx-80 my-10'>
    <div className='flex gap-20 md:gap-40 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
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
    <div className='py-20  flex flex-col items-center justify-center '>
        <h1 className='text-4xl text-blue-600'>Revenue Updates</h1>
        <div className='px-4 flex flex-col mx-5 items-end md:flex-row'>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between '>

                <div className='my-4 '>
                    <h2 className='text-3xl font-bold'>93,432$</h2>
                    <p className='text-sm font-thin'>Budget</p>
                </div>

                 <div>
                    <h2 className='text-3xl font-bold'>48,432$</h2>
                    <p className='text-sm font-thin'>Expense</p>

                </div>
                </div>
                <div className='mr-40'>

                    <Line data={data} />
                </div>
               

            </div>
            <div className=' '>
                    <Bar data={data} className='h-[200px]'/>
                   
             </div>

        </div>
    </div>
   </div>
  )
}

export default Ecommerce