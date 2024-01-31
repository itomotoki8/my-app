import { app } from "../utils/firebase"
import { getAuth, signOut } from "firebase/auth"
import { useRouter } from "next/router"


const Logout = () => {
    const router = useRouter()
const auth = getAuth(app)
const handleLogout = async () => {
  await signOut(auth)
  await router.push("/login")
}


    return (
        <div>
            <button onClick={handleLogout}>logout</button>
        </div>
    );
}

export default Logout;