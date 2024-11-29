import React, { useState } from 'react';
import { useSelector } from 'react-redux';


const ProfilePage = () => {

    const userInfo = useSelector((state) => state.authUser.userInfo)
    console.log(userInfo);
    

  const [isEditing, setIsEditing] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleEdit = () => setIsEditing((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated!');
    setIsEditing(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen mx-10 md:mx-30 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img
            src={userInfo && userInfo.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-gray-300 mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800">{userInfo && userInfo.username}</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Username</label>
            <input
              type="text"
              name="username"
              value={userInfo && userInfo.userName}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={userInfo && userInfo.email}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Phone</label>
            <input
              type="tel"
              name="phone"
              value={userInfo && userInfo.phone}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={toggleEdit}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>

            {isEditing && (
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Save
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
