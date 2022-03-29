import { RiLockPasswordLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

import "../css/Input.css";

const PasswordOtpInput = () => {
  return (
    <>
      <BsThreeDotsVertical className="three-dots" fill="grey" />
      <RiLockPasswordLine className="user" fill="grey" />
      <input className="input" type="text" placeholder="otp" />
    </>
  );
};

export { PasswordOtpInput };
