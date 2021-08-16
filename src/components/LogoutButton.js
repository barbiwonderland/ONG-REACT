import React from 'react'
import { userLogoutSuccess } from '../store/auth/auth.reducer'

export const LogoutButton = () => {

    return (
        <button
            className="btn btn-danger"
            onClick={() => userLogoutSuccess()}
        >
            Cerrar Sesión
        </button>
    )
}
