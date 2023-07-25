import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from 'src/config/firebase'
import { useAppDispatch } from 'src/store'
import { Role, resetUser, setUser } from 'src/store/user'

export const useUserListener = () => {
  //   useRefreshToken()

  const dispatch = useAppDispatch()

  useEffect(
    () =>
      onAuthStateChanged(auth, async (user) => {
        if (!user) {
          dispatch(resetUser())
          return
        }

        const tokenResult = await auth.currentUser?.getIdTokenResult()
        const roles = (tokenResult?.claims.roles || []) as Role[]
        const { displayName, email, uid } = user

        dispatch(
          setUser({
            uid,
            email: email || '',
            displayName: displayName || '',
            roles: roles || [],
            token: tokenResult?.token,
          })
        )
      }),
    [dispatch]
  )
}
