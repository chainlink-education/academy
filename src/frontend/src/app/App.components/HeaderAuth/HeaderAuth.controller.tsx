import { logout } from 'pages/Login/Login.actions'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'reducers'

import { HeaderView } from './HeaderAuth.view'

interface IHeaderAuth {
  isSignUp?: boolean
}

export const HeaderAuth = ({
  isSignUp
}: IHeaderAuth) => {
  const dispatch = useDispatch()
  const user = useSelector((state: State) => state.auth.user)

  function removeAuthUserCallback() {
    dispatch(logout())
  }

  return <HeaderView user={user} removeAuthUserCallback={removeAuthUserCallback} isSignUp={isSignUp} />
}
