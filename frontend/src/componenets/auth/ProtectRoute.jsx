import React from 'react'
import {Navigate} from 'react-router-dom'

export default function ProtectRoute({children, user, redirect="/login"}) {
  if(!user) return <Navigate to={redirect}/>

  return children
}
