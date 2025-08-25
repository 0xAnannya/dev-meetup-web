import Lottie from "lottie-react";
import dogNManAnimation from "../../assets/squeezeCat.json"; // your JSON file

const DogNManAnimation = () => {
  return (
    <div className="flex ">
      <Lottie
        animationData={dogNManAnimation}
        loop={true}
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
};

export default DogNManAnimation;
