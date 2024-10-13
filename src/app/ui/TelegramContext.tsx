"use client"

import { createContext } from "react"

const tg = window.Telegram
type TelegramContextType = {
    Telegram: Telegram
}
export var TelegramContext = createContext<TelegramContextType>({
    Telegram: tg
})
export default function TelegramProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>){
    return(<TelegramContext.Provider value={{
        Telegram: tg
    }}>
        {children}
    </TelegramContext.Provider>)
}