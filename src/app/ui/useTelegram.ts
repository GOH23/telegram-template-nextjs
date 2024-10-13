"use client"
import { useContext } from "react"
import {TelegramContext} from "./TelegramContext"

export function useTelegram(){
    const {Telegram} = useContext(TelegramContext)
    return {
        WebApp: Telegram!
    }
}