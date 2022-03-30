import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'src/config/firebase'
import { useAppDispatch, useAppSelector } from '..'
import { selectUid, setUser, resetUser } from './userSlice'

export const useUserListener = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        dispatch(resetUser())
      } else {
        const displayName = user?.displayName || null
        const uid = user?.uid || null
        const email = user?.email || null

        dispatch(
          setUser({
            user: { displayName, uid, email },
            claims: null,
          })
        )
      }
    })
  }, [dispatch])
}

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

  // const t1 = performance.now()
  // console.log(`Call to doSomething took ${t1 - t0} milliseconds.`)

  return token
}
