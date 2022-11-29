import React,{useContext} from 'react'
import { store } from '../App'

const ComA = () => {
    const [data,setData] = useContext(store)
  return (
    <div>
        ComA {data}

    </div>
  )
}

export default ComA