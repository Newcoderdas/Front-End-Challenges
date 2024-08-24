import React from 'react'
import Records from "/records.json"
const card = () => {

    return (
    <div className='mx-auto max-w-[1320px] text-2xl'>
        <h1 className='text-4xl text-center py-5'>Featured Product</h1>
    <div className='max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-5'>
        {
            Records.map(record =>{
                return(
                    <div className='text-center shadow-lg rounded-lg'>
                    <div className='overflow-hidden'>

                        <img src={record.image} 
                            alt="nothing"
                            className='hover:scale-125 duration-1000'
                            />
                            </div>
                         <h1 className='py-2'>{record.title}
                    </h1>
                    <p className=' py-2 text-slate-400 text-sm'>
                        {record.description}
                    </p>
                    <button className='bg-blue-600 rounded-lg text-white text-sm h-10 w-40 mb-2 shadow-lg hover:bg-slate-200 hover:text-blue-500'>

                        <p>Purchase</p>
                    </button>
                    
                    </div> 
                    )
            })
        }
        
    </div>
    </div>
  )
}

export default card