import React from "react";
import { useNavigate } from "react-router-dom";
import { UserIcon, BellIcon, LockClosedIcon } from "@heroicons/react/24/outline";

const Setting: React.FC = () => {

  const navigate = useNavigate();
  const redirectToNotification = () => {
    navigate("/notifications");
  }

  return (
    <div className="bg-neutral-light min-h-screen p-8">
      <h1 className="text-primary text-4xl font-bold mb-8">Settings</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
          <UserIcon className="w-12 h-12 text-teal mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-neutral-dark">Profile Settings</h3>
          <p className="text-sm text-neutral-dark mb-4">Manage your personal details.</p>
          <button className="mt-4 text-teal font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-teal-300 rounded-md transition-all">
            Edit Profile
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer" onClick={redirectToNotification}>
          <BellIcon className="w-12 h-12 text-accent-orange mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-neutral-dark">Notification Preferences</h3>
          <p className="text-sm text-neutral-dark mb-4">Manage your notifications settings.</p>
          <button className="mt-4 text-accent-orange font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-orange-300 rounded-md transition-all">
            Edit Notifications
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
          <LockClosedIcon className="w-12 h-12 text-primary mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-neutral-dark">Account Preferences</h3>
          <p className="text-sm text-neutral-dark mb-4">Update your password and security settings.</p>
          <button className="mt-4 text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary-300 rounded-md transition-all">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
