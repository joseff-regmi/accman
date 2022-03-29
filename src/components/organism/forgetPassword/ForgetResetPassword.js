import { ForgetNewPassword } from "../../ui/input/forgetPassword/ForgetNewPassword";
import { ForgetConfirmPassword } from "../../ui/input/forgetPassword/ForgetConfirmPassword";
import { ForgetResetPasswordButton } from "../../ui/button/forgetPassword/ForgetResetPasswordButton";

const ForgetResetPassword = () => {
  return (
    <>
      <ForgetNewPassword />
      <ForgetConfirmPassword />
      <ForgetResetPasswordButton />
    </>
  );
};

export { ForgetResetPassword };
