import { SignUpNewPassword } from "../../ui/input/signUp/SignUpNewPassword";
import { SignUpConfirmPassword } from "../../ui/input/signUp/SignUpConfirmPassword";
import { SignUpButton } from "../../ui/button/signUp/SignUpButton";

const SetPassword = () => {
	return (
		<>
			<SignUpNewPassword />
			<SignUpConfirmPassword />
			<SignUpButton />
		</>
	);
};

export { SetPassword };
