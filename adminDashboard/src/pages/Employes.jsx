import {useEffect, useState} from 'react'
import { employeesData } from '../assets/data/dummy'

const Employes = () => {
    const [searchRes,setSearchRes] = useState('')
    const [result,setResult] = useState(employeesData)

    const handleInput=(e)=>{
        const value = e.target.value
       setSearchRes(value)
    }


    useEffect(()=>{
      
        const res = employeesData.filter(ele=>{
            return ele.Name.toLocaleLowerCase().includes(searchRes.toLocaleLowerCase())
        })
        setResult(res)
    },[searchRes])
  
  return (
    <div className='md:ml-64 flex flex-col px-10 '>
        <div className='flex items-center justify-between mx-10 px-20'>

        <h1 className='text-4xl'>Employees Details</h1>
        <input type='text' onChange={handleInput}/>
        </div>
        <ul className='flex flex-row items-start justify-start gap-20 py-5 text-2xl'>
            <li className='w-48'>Name</li>
            <li className='w-44'>Profession</li>
            <li className='w-24'>Country</li>
            <li className='w-32'>Hire Date</li>
            <li>Reports To</li>
        </ul>
    
        <ul className='flex  flex-col gap-5'>
            {
               result&& result.map((ele,i)=>{
                    return (
                       <li key={i} className='flex gap-20'>
                        <div className='flex w-48' >
                            <img src={ele.EmployeeImage} className='h-8 w-8 rounded-full'/>
                            <p key={ele.Name}>{ele.Name}</p>
                        </div>
                        <p className='w-48' >{ele.Title}</p>
                        <p className='w-24' >{ele.Country}</p>
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
