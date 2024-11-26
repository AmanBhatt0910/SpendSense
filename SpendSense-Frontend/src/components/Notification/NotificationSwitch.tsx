import React from "react";
import { Switch } from "@headlessui/react";

interface NotificationSwitchProps {
  isChecked: boolean;
  onToggle: () => void;
  label: string;
}

const NotificationSwitch: React.FC<NotificationSwitchProps> = ({ isChecked, onToggle, label }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-lg text-neutral-dark">{label}</span>
      <Switch
        checked={isChecked}
        onChange={onToggle}
        className={`${
          isChecked ? "bg-teal" : "bg-neutral-dark"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            isChecked ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </div>
  );
};

export default NotificationSwitch;
