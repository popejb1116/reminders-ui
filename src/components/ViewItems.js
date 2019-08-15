import React, {useState, useEffect} from 'react'
import {firestore} from '../config/firebase'

const ViewItems = () => {

   const [isLoading, setIsLoading] = useState(true)
   const [fsData, setFsData] = useState()

   useEffect(() => {
      const getData = async() => {
         try {
            const data = await firestore.collection('items').get()
            setFsData(data)
            setIsLoading(false)
            console.log(data)
         } catch (error) {
            console.log("Firestore Error")
         }  
      } 
      getData()
   }, [])

   const Loading = () => {
      return <div>Loading</div>
   }

   return isLoading ? (
      <Loading/>
   ) : (
      <div>OK</div>
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
