"use client"

import { useTelegram } from "./ui/useTelegram"

export function HomePage(){
    const {WebApp} = useTelegram();
    return (
        <main>
          <p>{WebApp?.initDataUnsafe.user?.first_name}</p>
        </main>
      );
}