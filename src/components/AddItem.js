import React, {useState} from 'react'
import {firestore} from '../config/firebase'

const AddItem = () => {

   const [item, setItem] = useState()
   
   const handleSubmit = e => {
      e.preventDefault()
      console.log(item)
      const fbItem = {
         name: item
      }
      firestore.collection('items').add(fbItem)
      .then(() => {
         console.log('Firebase Add')
      })
      .catch( error => {
         console.log('Firebase Error')
      })
   }

   const handleChange = e => {
      console.log('handle change')
      setItem(e.target.value)
   }

   return (
      <form onSubmit={handleSubmit}>

         <input 
            type="text" 
            placeholder="Add Something"
            onChange={handleChange}
         />

         <button>Add!</button>

      </form>
      
   )
}

export default AddItem