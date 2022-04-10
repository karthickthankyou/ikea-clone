import { useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { getDatabase, ref, onValue } from 'firebase/database'
import { auth } from 'src/config/firebase'
import { useAppDispatch, useAppSelector } from '..'
import { selectUid, setUser, resetUser, Claims } from './userSlice'

const db = getDatabase()

// export const useUserListener = () => {
//   const dispatch = useAppDispatch()
//   useEffect(() => {
//     onAuthStateChanged(auth, async (user) => {
//       console.log('User: ', user)
//       if (!user) {
//         dispatch(resetUser())
//       } else {
//         const displayName = user?.displayName || null
//         const uid = user?.uid || null
//         const email = user?.email || null

//         dispatch(
//           setUser({
//             user: { displayName, uid, email },
//             claims: null,
//           })
//         )
//       }
//     })
//   }, [dispatch])
// }

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

export const useMetadataChange = () => {
  const user = auth.currentUser
  const dispatch = useAppDispatch()

  if (user) {
    const metadataRef = ref(db, `metadata/${user.uid}/refreshTime`)
    onValue(metadataRef, async (data) => {
      if (!data.exists) return
      // Force refresh to pick up the latest custom claims changes.
      const token = await user.getIdToken(true)
      const idTokenResult = await user.getIdTokenResult()
      const hasuraClaim = idTokenResult.claims[
        'https://hasura.io/jwt/claims'
      ] as Claims
      console.log('hasuraClaim ', hasuraClaim)

      dispatch(
        setUser({
          user: {
            displayName: user.displayName,
            uid: user.uid,
            email: user.email,
          },
          claims: hasuraClaim,
        })
      )
    })
  }
}

export const useUserListener = () => {
  const dispatch = useAppDispatch()

  useMetadataChange()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        dispatch(resetUser())
      } else {
        const token = await user.getIdToken(true)
        const idTokenResult = await user.getIdTokenResult()
        const hasuraClaim = idTokenResult.claims[
          'https://hasura.io/jwt/claims'
        ] as Claims
        console.log('hasuraClaim ', hasuraClaim)

        const displayName = user?.displayName || null
        const uid = user?.uid || null
        const email = user?.email || null

        if (hasuraClaim) {
          dispatch(
            setUser({
              user: { displayName, uid, email },
              claims: hasuraClaim,
            })
          )
        }
      }
    })
  }, [dispatch])
}
