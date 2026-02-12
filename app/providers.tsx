"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Theme = "light" | "dark";
type Language = "en" | "id";

type AppContextType = {
    theme: Theme;
    setTheme: (value: Theme) => void;
    lang: Language;
    setLang: (value: Language) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");
    const [lang, setLang] = useState<Language>("en");

    return (
        <AppContext.Provider value={{ theme, setTheme, lang, setLang }}>
            <div className={theme === "dark" ? "dark" : ""}>{children}</div>
        </AppContext.Provider>
    );
}

export function useApp() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("AppContext not found");
    }
    return context;
}
