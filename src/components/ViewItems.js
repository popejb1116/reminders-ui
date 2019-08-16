// LISTEN TO FIRESTORE

import React, {useState, useEffect, Fragment} from 'react'
import {firestore} from '../config/firebase'

let detachFirestoreListener

const ViewItems = () => {

   const [isLoading, setIsLoading] = useState(true)
   const [firestoreData, setFirestoreData] = useState()

   useEffect(() => {
      const connectFirestoreListener = async() => {
         detachFirestoreListener = await firestore.collection('items').onSnapshot(snapshot => {
            const docs = snapshot.docs
            const docData = docs.map(doc => {
               // CREATE NEW OBJECT BY ADDING THE FIRESTORE DOC ID TO THE FIRESTORE DOC DATA
               return {id: doc.id, ...doc.data()}
            })
            setFirestoreData(docData)
            setIsLoading(false)
         })
      } 
      connectFirestoreListener() 

      // DETACH LISTENER UPON 'UNMOUNT'
      return () => {
         console.log('Unmount')
         detachFirestoreListener()
      }
   }, [])

   const Loading = () => {
      return <div>Loading</div>
   }

   const DataList = () => {
      return (
         <ul>
            {firestoreData.map(datum => <DataItem datum={datum} key={datum.id}/>)}
         </ul>
      )
   }

   const DataItem = ({datum}) => {
      let text = `Grab ${datum.quantity} ${datum.name}`
      return <li>{text}</li>
   }

   return isLoading ? (
      <Loading/>
   ) : (
      <Fragment>
         <DataList/>
         {/* PROOF OF DETACH FUNCTIONALITY, NO PRODUCTION VALUE */}
         <button onClick={() => detachFirestoreListener()}>Detach</button>
      </Fragment>
   )
}

export default ViewItems








// GET FROM FIRESTORE

// import React, {useState, useEffect} from 'react'
// import {firestore} from '../config/firebase'

// const ViewItems = () => {

//    const [isLoading, setIsLoading] = useState(true)
//    const [firestoreData, setFirestoreData] = useState()

//    // COMPONENT DID MOUNT AS HOOK
//    useEffect(() => {
//       const getData = async() => {
//          try {
//             const res = await firestore.collection('items').get()
//             const docs = res.docs
//             const docData = docs.map(doc => doc.data())
//             setFirestoreData(docData)
//             setIsLoading(false)
            
//          } catch (error) {
//             console.log("Firestore Error")
//          }  
//       } 
//       getData()
//    }, [])

//    const Loading = () => {
//       return <div>Loading</div>
//    }

//    const DataList = () => {
//       return (
//          <ul>
//             {firestoreData.map(datum => 
//                <DataItem datum={datum} key={datum.name}/>
//             )}
//          </ul>
//       )
//    }

//    const DataItem = ({datum}) => {
//       return <li>{datum.name}</li>
//    }

//    return isLoading ? (
//       <Loading/>
//    ) : (
//       <DataList/>
//    )
// }

// export default ViewItems