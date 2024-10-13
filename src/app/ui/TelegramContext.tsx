"use client"

import { createContext } from "react"

const tg = window.Telegram.WebApp
type TelegramContextType = {
    Telegram: WebApp | undefined
}
export var TelegramContext = createContext<TelegramContextType>({
    Telegram: undefined
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