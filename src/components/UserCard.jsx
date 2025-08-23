const UserCard = ({ user }) => {
  const { name, breed, photoUrl, age, about } = user;
  return (
    <div className="card bg-[#FFFFFF] w-95 mt-15 shadow-sm">
      <figure>
        <img src={photoUrl} className="w-full p-4" alt="Dogs" />
      </figure>
      <div className="card-body ">
        <p className="flex w-full b text-2xl font-bold">{name}</p>

        <div className="flex   mt-1 ">
          {age && (
            <p className="text-[#ba6230] font-semibold text-lg ">Age: {age}</p>
          )}
          {breed && (
            <p className="text-[#ba6230] font-semibold text-lg ">
              Breed: {breed}
            </p>
          )}
        </div>
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
