import React, {useState, useEffect} from 'react'
import {firestore} from '../config/firebase'

const ViewItems = () => {

   const [isLoading, setIsLoading] = useState(true)
   const [fsData, setFsData] = useState()

   useEffect(() => {
      const getData = async() => {
         try {
            const res = await firestore.collection('items').get()
            const docs = res.docs
            const dataArray = docs.map(doc => {
               return doc.data()
            })
            setFsData(dataArray)
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

   const DocItem = ({datum}) => {
      return <li>{datum.name}</li>
   }

   return isLoading ? (
      <Loading/>
   ) : (
      <ul>
         {fsData.map( datum => <DocItem datum={datum} key={datum.name} />)}
      </ul>
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
