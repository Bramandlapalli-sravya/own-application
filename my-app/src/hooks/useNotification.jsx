import { useState, useRef, useEffect } from "react";
import Notification from "../Components/Home/Notification/index.tsx";

const useNotification = (postion = "bottom-left") => {
  const [notification, setNotification] = useState(null);
  const timerRef = useRef(null);

  const triggerNotification = (notificationProps) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setNotification(notificationProps);
    timerRef.current = setTimeout(() => {
      setNotification(null);
    }, notificationProps.duration || 3000);
  };

  useEffect(() => {
    // Cleanup on component unmount
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const NotificationComponent = notification && (
    <div className={`${postion}`}>
      <Notification {...notification} />
    </div>
  );

  return { triggerNotification, NotificationComponent };
};

export default useNotification;
