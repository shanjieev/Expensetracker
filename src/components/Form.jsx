import React from 'react'
import { useForm } from 'react-hook-form'
import List from './List';

export default function Form() {
    const {register, handleSubmit, resetField} = useForm();
    const onSubmit = (data) => {
       console.log(data)
    }
  return ( <div className="form max-w-sm mx-auto w-96">
        
    <h1 className='font-bold pb-4 text-xl'>Transaction</h1>

    <form id='form'onSubmit={handleSubmit(onSubmit)}> 
        <div className="grid gap-4">
            <div className="input-group"> 
                <input type='text'{...register('name')} placeholder='Sallery,House rent,SIP' className='form-input'/>
                </div>
                <select className='form-input'{...register('type')}>
                    <option value="inverstment" defaultValue>Investment</option>
                    <option value="Expense">Expense</option>
                    <option value="Savings" >Savings</option>
              </select>
              <div className="input-group"> 
                <input type='text' {...register('Amount')}placeholder='Amount' className='form-input'/>
                </div>
                <div className='submit-btn'>
                    <button className="btn btn-primary">Make Transcation</button>

                </div>
            
                </div>
                </form>
                <List></List>
                </div>

  )
}

