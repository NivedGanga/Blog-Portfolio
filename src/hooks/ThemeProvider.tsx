import React, { createContext, useContext, useState } from "react"
import { ThemeModel } from "../models/ThemeModel"

interface ThemeContextType {
    theme: ThemeModel
    setTheme: (theme: 'light' | 'dark') => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface Props {
    children: React.ReactNode
}

export function ThemeProvider(props: Props) {
    const [theme, setThemeState] = useState<ThemeModel>(new ThemeModel("dark"))
    const { children } = props
    const setTheme = (theme: 'light' | 'dark') => {
        setThemeState(new ThemeModel(theme));
    };
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context
}

