import { createContext, useState } from 'react';

export const CursorContext = createContext({
    cursorVariant: "default",
    setCursorVariant: () => {}
});

export const CursorProvider = ({ children }) => {
    const [cursorVariant, setCursorVariant] = useState("default");

    return (
        <CursorContext.Provider value={{ cursorVariant, setCursorVariant }}>
            {children}
        </CursorContext.Provider>
    );
};
