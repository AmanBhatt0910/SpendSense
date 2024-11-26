import React, { useState } from "react";
import NotificationItem from "../components/Notification/NotificationItem";
import NotificationSwitch from "../components/Notification/NotificationSwitch";

const Notifications: React.FC = () => {
  const [emailNotification, setEmailNotification] = useState(true);
  const [smsNotification, setSmsNotification] = useState(false);

  const toggleEmailNotification = () => setEmailNotification(!emailNotification);
  const toggleSmsNotification = () => setSmsNotification(!smsNotification);

  return (
    <div className="bg-neutral-light min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-primary text-4xl font-semibold mb-4">Notifications</h1>
        <p className="text-neutral-dark text-lg mb-8">
          Manage your notifications and stay updated on important events.
        </p>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-neutral-dark mb-4">
            Active Notifications
          </h2>
          
          <div className="space-y-4">
            <NotificationItem title="New Transaction Alert" status="active" />
            <NotificationItem title="Budget Limit Reached" status="inactive" />
          </div>
        </div>

        <div className="bg-white p-6 mt-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-neutral-dark mb-4">
            Notification Preferences
          </h2>

          <div className="space-y-6">
            <NotificationSwitch
              isChecked={emailNotification}
              onToggle={toggleEmailNotification}
              label="Email Notifications"
            />
            <NotificationSwitch
              isChecked={smsNotification}
              onToggle={toggleSmsNotification}
              label="SMS Notifications"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

// notifies the user about important events like reaching a spending limit, a new transaction, etc.