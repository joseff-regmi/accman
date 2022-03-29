import "../css/Input.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const FindAccount = () => {
  return (
    <>
      <div>
        <AiOutlineMail className="user" fill="grey" />
        <BsThreeDotsVertical className="three-dots" fill="grey" />
        <input className="input" type="text" placeholder="email" />
      </div>
    </>
  );
};

export { FindAccount };
