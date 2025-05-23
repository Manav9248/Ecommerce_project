import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const MyOrdersPage = () => {

    //using hooks
    const [orders,setOrders]  = useState([]);

    //using navigate hook
    const navigate = useNavigate();

    //useEffect hook

    useEffect(()=>{
    //simulate fetching orders
    setTimeout(()=>{
        const mockOrders = [
            {
                _id:"12345",
                createdAt: new Date(),
                shippingAddress : {city:"New York", country:"USA"},
                orderItem:[
                    {
                        name:"Product 1",
                        image: "https://picsum.photos/500/500?random=12"
                    }
                ],
                totalPrice:100,
                isPaid:true,
            },
            {
                _id:"34567",
                createdAt: new Date(),
                shippingAddress : {city:"New Delhi", country:"INDIA"},
                orderItem:[
                    {
                        name:"Product 2",
                        image: "https://picsum.photos/500/500?random=14"
                    }
                ],
                totalPrice:500,
                isPaid:false,
            },
        ];

        setOrders(mockOrders);
    },1000);

    },[]);

    //function
    const handleRowClick = (orderId) =>{
        navigate(`/order/${orderId}`);

    }


  return (
    <div className='max-w-full w-full  border mx-auto p-4 sm:p-6'>
        <h2 className='text-xl sm:text-2xl font-bold mb-6'>My Orders</h2>

        <div className='relative w-full shadow-md sm:rounded-lg overflow-x-auto '>
            <table className='min-w-full text-left text-gray-500'>

                <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                    <tr>
                    <th className='py-2 px-4 sm:py-3'>image</th>
                    <th className='py-2 px-4 sm:py-3'>order id</th>
                    <th className='py-2 px-4 sm:py-3'>created</th>
                    <th className='py-2 px-4 sm:py-3'>shipping address</th>
                    <th className='py-2 px-4 sm:py-3'>items</th>
                    <th className='py-2 px-4 sm:py-3'>price</th>
                     <th className='py-2 px-4 sm:py-3'>status</th>
                    </tr>
                </thead>

                <tbody>
                    {orders.length > 0 ? (
                        orders.map((order)=>(
                        <tr onClick={()=>handleRowClick(order._id)}
                         key={order._id} 
                        className='border-b hover:border-gray-50 cursor-pointer'>
                            
                            {/* image section */}
                        <td className='py-2 px-2 sm:py-4 sm:px-4'>
                            <img src={order.orderItem[0].image}
                             alt={order.orderItem[0].name} 
                             className='w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg'/>
                        </td>

                        {/* order id */}
                        <td className='py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap '>#{order._id}</td>

                        {/* createdAt */}
                        <td className='py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap '>{new Date(order.createdAt).toLocaleDateString()}{" "}
                        {new Date(order.createdAt).toLocaleTimeString()}
                        </td>

                        {/* Adddress shipping */}
                        <td className='py-2 px-2 sm:py-4 sm:px-4 '>{order.shippingAddress ? `${order.shippingAddress.city},${order.shippingAddress.country}`:`N/A`}</td>

                        {/* items section */}
                        <td className='py-2 px-2 sm:py-4 sm:px-4 '>{order.orderItem.length}</td>  

                        {/* price section */}
                        <td className='py-2 px-2 sm:py-4 sm:px-4 '>{order.totalPrice}</td>

                        {/* status section */}
                        <td className='py-2 px-2 sm:py-4 sm:px-4'>
                        <span
                         className={`${order.isPaid?"bg-green-100 text-green-700":"bg-red-100 text-red-700"} px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}>{order.isPaid?"Paid":"Pending"}</span>
                        </td>                      
                        
                        </tr>
                        ))
                    ):(
                        <tr>
                            <td colSpan={7} className='py-4 px-4 text-center text-gray-500'>You have no orders</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default MyOrdersPage