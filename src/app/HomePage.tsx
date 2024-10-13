"use client"

import { useTelegram } from "./ui/useTelegram"

export function HomePage(){
    const {WebApp} = useTelegram();
    return (
        <main>
          <p>{JSON.stringify(WebApp?.initDataUnsafe.user)}</p>
        </main>
      );
}