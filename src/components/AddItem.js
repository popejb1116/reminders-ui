import React, {useState} from 'react'
import {firestore} from '../config/firebase'

const AddItem = () => {

   const [item, setItem] = useState()
   
   const handleSubmit = async(e) => {
      e.preventDefault()
      console.log(item)
      const fbItem = {
         name: item
      }
      try {
         await firestore.collection('items').add(fbItem)
      } catch (error) {
         console.log('Firebase Error')
      }
   }

   return (
      <form onSubmit={handleSubmit}>
         <input 
            type="text" 
            placeholder="Add Something"
            onChange={e => setItem(e.target.value)}
         />
         <button>Add!</button>
      </form>
   )
}

export default AddItem