import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        signOut(auth)
            .then(() => {
                navigate('/login')
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            Home
            <span onClick={onLogout} class="material-symbols-outlined">
                logout
            </span>
        </div>
        
    )
}

export default Home