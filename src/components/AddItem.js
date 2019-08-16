import React, {useState} from 'react'
import {firestore} from '../config/firebase'

const AddItem = () => {

   const [itemName, setItemName] = useState("")
   const [quantity, setQuantity] = useState(0)

   const clearForm = () => {
      setItemName("")
      setQuantity(0)
   }
   
   const handleSubmit = async(e) => {
      e.preventDefault()

      const firestoreItem = {
         name: itemName,
         quantity: quantity
      }

      clearForm()
      
      try {
         await firestore.collection('items').add(firestoreItem)
      } catch (error) {
         console.log('Firebase Error')
      }
   }

   return (
      <form onSubmit={handleSubmit}>
         <input 
            type="text" 
            placeholder="Add Something"
            value={itemName}
            onChange={e => setItemName(e.target.value)}
         />
         <input 
            type="number" 
            placeholder="Quantity"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
         />
         <button>Add!</button>
      </form>
   )
}

export default AddItem