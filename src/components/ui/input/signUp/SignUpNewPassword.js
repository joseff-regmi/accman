import '../css/Input.css'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {BsEyeSlashFill} from 'react-icons/bs'
import {RiLockPasswordLine} from 'react-icons/ri'


const SignUpNewPassword = ()=> {
    return(
        <>
        <div>
        <BsThreeDotsVertical className='three-dots' fill='grey'/>
        <BsEyeSlashFill className='eye' fill='grey'/>
        <RiLockPasswordLine className='user' fill='grey'/>
        <input className="input" type="password"  placeholder="new password"/>
        </div>
        </>
    )
}

export {SignUpNewPassword}