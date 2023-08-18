import React from 'react'
import { employeesData } from '../assets/data/dummy'

const Employes = () => {
  
  return (
    <div className='md:ml-64 flex flex-col px-10 '>
        <h1 className='text-4xl'>Employees Details</h1>
        <ul className='flex flex-row items-start justify-start gap-20 py-5 text-2xl'>
            <li className='w-48'>Name</li>
            <li className='w-44'>Profession</li>
            <li className='w-24'>Country</li>
            <li className='w-32'>Hire Date</li>
            <li>Reports To</li>
        </ul>
      
      
        <ul className='flex  flex-col gap-5'>
            {
                employeesData.map(ele=>{
                    return (
                       <li key={ele.Name} className='flex gap-20'>
                        <div className='flex w-48'>
                            <img src={ele.EmployeeImage} className='h-8 w-8 rounded-full'/>
                            <p>{ele.Name}</p>
                        </div>
                        <p className='w-48'>{ele.Title}</p>
                        <p className='w-24'>{ele.Country}</p>
                        <p className='w-32'>{ele.HireDate}</p>
                        <p>{ele.ReportsTo}</p>
                       </li>
                    )
                })
            }
            
        </ul>
      
    </div>
  )
}

export default Employes
