import React, {useState} from 'react'
import {auth} from '../config/firebase'

const SignIn = () => {

   const [email, setEmail] = useState()
   const [password, setPassword] = useState()

   const handleSubmit = e => {
      e.preventDefault()
      console.log("Submit")
      console.log(email)
      console.log(password)

      auth.signInWithEmailAndPassword(email, password)
      .then(() => {
         console.log("Signed In")
      })
      .catch(error => {
         console.log("Error Signing In")
      })
   }

   const SignOut = () => {
      auth.signOut()
      .then(() => {
         console.log("Signed Out")
      })
      .catch(error => {
         console.log("Error Signing Out")
      })
   }

   return (
      <section>
         <form onSubmit={handleSubmit}>
            <input 
               type="email" 
               name="email"
               placeholder="Email"
               onChange={e => setEmail(e.target.value)}
            />
            <input 
               type="password"
               name="password"
               placeholder="Password"
               onChange={e => setPassword(e.target.value)}   
            />
            <button>Sign In</button>
         </form>

         <button onClick={SignOut}>Sign Out</button>
      </section>
   )
}

export default SignIn