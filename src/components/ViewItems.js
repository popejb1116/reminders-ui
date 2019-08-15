import React, {useState, useEffect} from 'react'
import {firestore} from '../config/firebase'

const ViewItems = () => {

   const [isLoading, setIsLoading] = useState(true)
   const [firestoreData, setFirestoreData] = useState()

   // COMPONENT DID MOUNT AS HOOK
   useEffect(() => {
      const getData = async() => {
         try {
            const res = await firestore.collection('items').get()
            const docs = res.docs
            const docData = docs.map(doc => doc.data())
            setFirestoreData(docData)
            setIsLoading(false)
            
         } catch (error) {
            console.log("Firestore Error")
         }  
      } 
      getData()
   }, [])

   const Loading = () => {
      return <div>Loading</div>
   }

   const DataList = () => {
      return (
         <ul>
            {firestoreData.map(datum => 
               <DataItem datum={datum} key={datum.name}/>
            )}
         </ul>
      )
   }

   const DataItem = ({datum}) => {
      return <li>{datum.name}</li>
   }

   return isLoading ? (
      <Loading/>
   ) : (
      <DataList/>
   )
}

export default ViewItems



























// import React, {useState, useEffect} from 'react'

// const ViewItems = () => {
   
//    let [loading, setLoading] = useState(true)

//    useEffect(() => {
//       const fakeAPIcall = async() => {
//          await setTimeout(() => {
//             setLoading(false) 
//          }, 4000)
//       }

//       fakeAPIcall()
//    }, [])

//    return loading ? (
//       <div>Loading...</div>
//    ) : (
//       <div>Arrived</div>
//    )
   
// }

// export default ViewItems
