import '../css/Input.css'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {BiBuildings} from 'react-icons/bi'

const SignUpCompanyName = () => {
    return (

        <>
        <div>
         <BiBuildings className='user' fill='grey'/>
        <BsThreeDotsVertical className='three-dots' fill='grey'/>
        <input className="input" type="text" placeholder="company name" />
        </div>
        </>
    )
}

export {SignUpCompanyName}