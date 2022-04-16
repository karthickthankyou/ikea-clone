import { useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { getDatabase, ref, onValue } from 'firebase/database'
import { auth } from 'src/config/firebase'
import { notify } from 'src/hooks'
import { useAppDispatch, useAppSelector } from '..'
import { selectUid, setUser, resetUser, Claims, setClaims } from './userSlice'

const db = getDatabase()

export const useGetToken = () => {
  const [token, settoken] = useState<string | null | undefined>(null)
  const uid = useAppSelector(selectUid)

  useEffect(() => {
    ;(async () => {
      const tokenId = await auth.currentUser?.getIdToken(false)
      settoken(tokenId)
    })()
  }, [uid])
  return token
}

export const getToken = async () => {
  // const t0 = performance.now()
  const token = await auth.currentUser?.getIdToken(false)

  return token
}

export const useUserListener = () => {
  const dispatch = useAppDispatch()

  useEffect(
    () =>
      onAuthStateChanged(auth, async (user) => {
        if (!user) {
          dispatch(resetUser())
          return
        }

        notify({
          message: `Welcome. ${user.displayName || ''}`,
          type: 'success',
        })

        dispatch(
          setUser({
            displayName: user?.displayName || null,
            uid: user?.uid || null,
            email: user?.email || null,
          })
        )

        const metadataRef = ref(db, `metadata/${user.uid}/refreshTime`)
        onValue(metadataRef, async (data) => {
          if (!data.exists) return

          const token = await user.getIdToken(true)
          const idTokenResult = await user.getIdTokenResult()
          const hasuraClaim = idTokenResult.claims[
            'https://hasura.io/jwt/claims'
          ] as Claims

          dispatch(setClaims(hasuraClaim))
        })
      }),
    [dispatch]
  )
}
