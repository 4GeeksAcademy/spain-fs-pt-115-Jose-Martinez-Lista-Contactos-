
export const initialStore = () => {
    return {
        
        contactos: [] 
    };
};

export default function storeReducer(store, action = {}) {
    switch (action.type) {
        case 'establecer_contactos':
            return { ...store, contactos: action.payload };

        case 'agregar_contacto':
            return { ...store, contactos: [...store.contactos, action.payload] };

        case 'eliminar_contacto':
            
            return { ...store, contactos: store.contactos.filter(c => c.id !== action.payload.id) };

        case 'actualizar_contacto':
            return {
                ...store,
                contactos: store.contactos.map(c => 
                    c.id === action.payload.id ? action.payload : c
                )
            };

        default:
            return store;
    }
}
