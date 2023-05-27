import { auth } from '../config/firebase'
export default function User() {
    const getUser = async () => {
        console.log(auth.currentUser)
    }
    return (
        <button onClick={getUser}>User</button>
    )
}
