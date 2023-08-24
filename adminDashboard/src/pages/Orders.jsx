import { ordersData } from '../assets/data/dummy'

const Orders = () => {
  return (
    <div className='flex  my-10 flex-col mx-4 md:ml-72'>
        <ul className='flex  justify-start gap-12 md:gap-24 items-start text-2xl mb-10'>
        <li className='w-10 '>Image</li>
            <li className='w-32'>Item</li>
            <li className='w-28'>Customer name</li>
            <li className='w-14'>Total Amount</li>
            <li className='w-24'>Status</li>
            <li>Order ID</li>
        </ul>
       
        <ul className='flex flex-col gap-5'>
        
           
            {
                ordersData.sort().map(item=>{
                    return <li key={item.OrderID} className='flex  justify-start gap-12 md:gap-24 items-start border-1 mr-10 p-2 border-black '>
                        <img src={`${item.ProductImage}`} className='w-14 rounded-lg  '/>
                        <p className='w-32'>{item.OrderItems}</p>
                        <p className='w-28'>{item.CustomerName}</p>
                        <p className='w-14'>${item.TotalAmount}</p>
                        <p className={`w-20 ${item.Status=='canceled' ? 'bg-red-500' : 'bg-blue-600'} text-white rounded-xl px-2 py-1`}>{item.Status}</p>
                        <p>{item.OrderID}</p>
                        
                        </li>
                })
            }
        </ul>
        
        </div>
  )
}

export default Orders