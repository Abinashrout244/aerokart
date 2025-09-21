import { useEffect, useState } from "react";

const Useonline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const handle_Online = () => setIsOnline(true);
    const handle_offline = () => setIsOnline(false);
    window.addEventListener("online", handle_Online);
    window.addEventListener("offline", handle_offline);

    return () => {
      window.removeEventListener("online", handle_Online);
      window.removeEventListener("offline", handle_offline);
    };
  }, []);
  return isOnline;
};
export default Useonline;
