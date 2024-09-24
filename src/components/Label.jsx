
import React from 'react'

const obj=[

    { type:"savings",
        color:'#f9c74f',
        percent: 0
    },
     
        {
            type:"Investment",
            color:'rgb(255, 205, 86)',
            percent:0
        },
        {
            type:"Expense",
            color: 'rgb(54, 162, 235)',
            percent:0
        }
   
]
export default function Labels()
 {   
    

    
   return (
   <>
   {obj.map((v, i) => <Labelcomponent key={i} data={v}></Labelcomponent>)};
   </>
  )
}
function Labelcomponent({data}){
    if(!data)return<></>;
    return (
         <div className="labels flex justify-between">
            <div className="flex gap-2">
                  <div className='w-2 h-2 rounded py-3' style={{background:data.color??'#f9c74f'}}></div>
                 <h3  className='text-md'>{data.type ?? ''}</h3>
                 </div>
                 <h3 className='font-bold'>{data.percent ??0}%</h3>
                 </div>
   )
}
