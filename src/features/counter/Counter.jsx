import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,  addTodo } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.co.value)
  const dispatch = useDispatch()
    const [inpValue, setinpValue] = useState('')
  return (
    <div>
        <input type="text" onChange={(e)=>setinpValue(e.target.value)} />
        <button onClick={()=> dispatch(addTodo(inpValue))}>Add</button>
        <ul>

        {count.map(item=>{
            return(
                <li>{item}</li>
            )
        })}
        </ul>

        
    </div>
  )
}