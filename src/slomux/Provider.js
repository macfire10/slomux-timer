import React from 'react'
import StoreContext from './context'

/* Make provider a functional component, remove legacy getChildContext
*/
export const Provider = ({ store, children }) => 
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
