import { signIn, signOut, useSession } from "next-auth/client"
import React from "react"

const Login = () => {
  const [session] = useSession()
  return (
    <div>
      <h1>Hello World</h1>
      {session ? (
        <button onClick={() => signOut()}>Signout</button>
      ) : (
        <button onClick={() => signIn()}>SignIn</button>
      )}
      {session && (
        <div>
          <small>Signed in as</small>
          <br />
          <strong>{session.user.email || session.user.name}</strong>
        </div>
      )}
    </div>
  )
}

export default Login
