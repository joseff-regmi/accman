

import '../css/Input.css'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {FaRegUser} from 'react-icons/fa'

const LoginUsername = () => {
    return (

        <>
         <FaRegUser className='user' fill='grey'/>
        <BsThreeDotsVertical className='three-dots' fill='grey'/>
        <input className="input" type="text" placeholder="email" />
        </>
    )
}

export {LoginUsername}