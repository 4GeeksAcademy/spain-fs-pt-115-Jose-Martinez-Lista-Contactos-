import { useReducer, useContext, createContext } from 'react';
import storeReducer, { initialStore } from '../store.js';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(storeReducer, initialStore());

    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

const useGlobalReducer = () => useContext(StoreContext);

export default useGlobalReducer;