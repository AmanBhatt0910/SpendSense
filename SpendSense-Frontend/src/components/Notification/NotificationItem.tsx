import React from "react";
import { BellIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

interface NotificationItemProps {
  title: string;
  status: "active" | "inactive";
}

const NotificationItem: React.FC<NotificationItemProps> = ({ title, status }) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-neutral-light">
      <div className="flex items-center space-x-3">
        <BellIcon className="w-6 h-6 text-teal" />
        <span className="text-lg text-neutral-dark">{title}</span>
      </div>
      {status === "active" ? (
        <CheckCircleIcon className="w-6 h-6 text-green-500" />
      ) : (
        <XCircleIcon className="w-6 h-6 text-red-500" />
      )}
    </div>
  );
};

export default NotificationItem;
