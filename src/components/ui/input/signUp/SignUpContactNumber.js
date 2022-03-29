import '../css/Input.css'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {BsPhone} from 'react-icons/bs'

const SignUpContactNumber = () => {
    return (

        <>
        <div>
         <BsPhone className='user' fill='grey'/>
        <BsThreeDotsVertical className='three-dots' fill='grey'/>
        <input className="input" type="text" placeholder="mobile number" />
        </div>
        </>
    )
}

export {SignUpContactNumber}