
import { useContext } from "react";
import { TelegramContext } from "./ui/TelegramContext";


export default function Home() {

  return (
    <main>
      <p>{Telegram?.WebApp.initDataUnsafe.user?.first_name}</p>
    </main>
  );
}
