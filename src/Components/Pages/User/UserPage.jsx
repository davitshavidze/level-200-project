import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Spline from '@splinetool/react-spline';

function UserPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("Found")));

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.name);

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-100 gap-10 max-lg:flex-col">
      <div className="w-90 bg-white rounded-3xl shadow-lg p-8 max-lg:w-70">
        <h1 className="text-3xl font-bold text-center mb-6">Profile INFO</h1>

        <div className="flex justify-center mb-6">
          <img
            src="https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg"
            alt="avatar"
            className="w-28 h-28 rounded-full border"
          />
        </div>

        <div className="text-center space-y-2">

          <p className="text-gray-600">Email: {user?.email}</p>
          <p className="text-gray-600 capitalize">Status / role: {user?.role}</p>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("Found");
            navigate("/");
          }}
          className="w-full mt-8 py-2 rounded-xl font-semibold border hover:bg-black hover:text-white cursor-pointer transition-all duration-300 "
        >
          Log out
        </button>
      </div>

      <div className="flex justify-center items-center w-fill">
        <img src="https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/408864179_342479481868687_2724919989645877908_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeENmIYd9O57UoxOSfwSK6RQW7tgzUOr-gxbu2DNQ6v6DJ3kw5iCZ9peYB7PGXUhzhfHUGVYTG-8OOG-EmSqUIBd&_nc_ohc=nBr8HsNEz4gQ7kNvwEgh-BO&_nc_oc=Adkk2w4pDzm3IRghSXoioT5qbC055wUJszAGk8jubdUx_KrnCOXTeO0bihlHhigawP4&_nc_zt=23&_nc_ht=scontent.ftbs5-2.fna&_nc_gid=vQzjrCsVVAGX-dRzIaQFRw&oh=00_AfuIuNh16WXgy2mFSRa0sWW1hMjsx3H3pWaN0xJszo5SuQ&oe=6983B793" alt="xD" className="w-140 rounded-2xl max-lg:w-[80%]"/>
      </div>
    </section>
  );
}

export default UserPage;
