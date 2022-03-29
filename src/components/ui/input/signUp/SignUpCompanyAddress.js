import '../css/Input.css'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {FaRegAddressCard} from 'react-icons/fa'

const SignUpCompanyAddress = () => {
    return (
        <>
        <div>
         <FaRegAddressCard className='user' fill='grey'/>
        <BsThreeDotsVertical className='three-dots' fill='grey'/>
        <input className="input" type="text" placeholder="company address" />
        </div>
        </>
    )
}

export {SignUpCompanyAddress}