import React, { memo, useMemo } from 'react'

export default  memo( function ContactData({ data }) {
    const renderContacts = useMemo(()=>{
        if(!data.length){
            return ( 
                <div  className="col-md-3 bg-light m-1 d-fle flex-column shadow-lg p-2 mb-5 bg-white rounded">
                    <h2>No recursos encontrados</h2>
                </div>
            )
        }
        return data.map(contact=>{
            return(
                <div key={contact.id} className="card cardbg-light m-1 d-flex flex-column justify-content-center shadow-lg p-3 mb-2" style={{maxWidth: 300}}>
                    <div><strong>Nombre: </strong><p> {contact.name}</p></div>
                    <strong>Email: </strong><p>{contact.email}</p>
                    <div><strong>Telefono: </strong><p>{contact.phone}</p></div>
                    <div style={{wordWrap:"break-word"}}><strong>Mensaje: </strong><p>{contact.message}</p></div>
                </div>
            )
        })
    },[data])
 

    return (
        <div>

            <div>
                <h2 className="border-bottom border-dark w-25"> <small className="text-muted">Lista de </small>contactos</h2>
            </div>
            <div className="row container d-flex justify-content-center">
                {renderContacts}
            </div>
        </div>
    )
})
