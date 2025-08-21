import Lottie from "lottie-react";
import loginPageAnimation from "../../assets/loginPageAnimation.json"; // your JSON file

const LoginPageAnimation = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie
        animationData={loginPageAnimation}
        loop={true}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default LoginPageAnimation;
