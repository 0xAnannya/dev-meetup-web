import Lottie from "lottie-react";
import pawsAnimation from "../../assets/pawsAnimation.json"; // your JSON file

const PawsAnimation = () => {
  return (
    <div className="flex ">
      <Lottie
        animationData={pawsAnimation}
        loop={true}
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
};

export default PawsAnimation;
