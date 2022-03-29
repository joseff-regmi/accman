import { Link } from "react-router-dom";

const ContinueButtonEmail = () => {
  return (
    <>
      <Link to="/auth/signup-otp">
        <button className="button">Continue</button>
      </Link>
    </>
  );
};

export { ContinueButtonEmail };
