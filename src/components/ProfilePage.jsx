import { useSelector } from "react-redux";
import PawsAnimation from "../Animation/PawsAnimation";
import { useState } from "react";
import EditProfilePage from "./EditProfilePage";
import image from "../../assets/loginBackground.jpg";
import { CommonApis } from "../utils/CommonApis";
import { Link } from "react-router";
import DogNManAnimation from "../Animation/DogNManAnimation";

const ProfilePage = () => {
  const [editProfile, setEditProfile] = useState(false);
  const user = useSelector((state) => state.user);
  const { handleLogOut } = CommonApis();

  const handleEditProfile = () => {
    setEditProfile((prev) => !prev);
  };
  return (
    <>
      {user && (
        <>
          <div
            className="flex w-full"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              filter: "saturate(0.7)",
            }}
          >
            <div className="flex flex-row w-full">
              {/* Sidebar */}

              <aside className="w-65 hidden lg:flex h-screen bg-[#fdf6e3] p-6  flex-col gap-6 rounded-r-2xl shadow-md">
                <Link
                  to="/connections"
                  className="flex items-center gap-3 text-gray-700 hover:text-black"
                >
                  <span>💛</span>
                  Connections
                </Link>
                <Link
                  to="/requests"
                  className="flex items-center gap-3 text-gray-700 hover:text-black"
                >
                  <span>📥</span>
                  Requests
                </Link>
                <button
                  onClick={handleEditProfile}
                  className="flex items-center gap-3 text-gray-700 hover:text-black"
                >
                  <span>✏️</span>
                  {editProfile ? "View Profile" : "Edit Profile"}
                </button>
                <button
                  onClick={handleLogOut}
                  className="flex items-center gap-3 text-gray-700 hover:text-black  "
                >
                  <span>👋</span>
                  Logout
                </button>
              </aside>
              <div className="flex-1 flex ">
                {editProfile ? (
                  <EditProfilePage
                    formTitle={"Edit Personal Info"}
                    user={user}
                  />
                ) : (
                  // </div>
                  <main className="flex-1 p-8 flex  flex-col gap-6 ">
                    {/* user Card */}

                    <div className=" shadow-md  flex-col border-1 bg-[#FAF3E0] w-3/4 rounded-2xl p-6 flex gap-6 items-start">
                      <div className=" flex w-full  gap-10 h-53">
                        <img
                          src={user.photoUrl}
                          alt={user.name}
                          className=" w-1/2 object-cover rounded-xl"
                        />
                        <div className=" flex gap-4 justify-center-safe flex-col h-50 w-full">
                          <h2 className="text-4xl font-bold mb-2 ">
                            {user.name}
                          </h2>
                          <span className="font-semibold mb-4  w-full flex">
                            {user.about}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row w-full">
                        <div className="flex flex-col  w-full gap-4">
                          <div className="space-y-1">
                            <p>
                              <span className="text-2xl font-semibold">
                                Breed:
                              </span>{" "}
                              <span className="text-2xl ml-2">
                                {user?.breed}
                              </span>
                            </p>
                            <p>
                              <span className="text-2xl font-semibold">
                                Age:
                              </span>{" "}
                              <span className="text-2xl ml-2">{user?.age}</span>
                            </p>
                            <p>
                              <span className="text-2xl font-semibold">
                                Location:
                              </span>{" "}
                              <span className="text-2xl ml-2">
                                {user?.location}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="flex w-full justify-end items-end">
                          <DogNManAnimation />
                        </div>
                      </div>
                    </div>
                  </main>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProfilePage;
