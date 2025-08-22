import PawsAnimation from "../Animation/PawsAnimation";

const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, skills, about } = user;
  return (
    <div className="card bg-[#FFFFFF] w-85 mt-15 shadow-sm">
      <figure>
        <img src={photoUrl} className="w-full p-4" alt="Shoes" />
      </figure>
      <div className="card-body ">
        <p className="card-title">{firstName + " " + lastName}</p>
        {age && skills && (
          <p className="text-[#f2a070] ">
            {age} {skills}
          </p>
        )}
        {about && <p>{about}</p>}

        <div className="card-actions justify-center mt-2 flex">
          <button className="btn btn-success">Interested</button>
          <button className="btn btn-neutral">Ignore</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
