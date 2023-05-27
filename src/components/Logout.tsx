import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth'

export default function Logout() {
    const logout = async () => {
        try {
            const response = await signOut(auth)
            console.log(response)
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <button onClick={logout}>Logout</button>
    )
}
