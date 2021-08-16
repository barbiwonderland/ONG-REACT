import * as React from 'react'
import confirmAndDelete from '../utils/confirmAndDelete';

/* this constant should be pass to the confirmAndDelete function to show
the correspondent message alert and, if the user confirm, call the method 
to perform the DELETE request */
const CONTENT_TYPE = 'news'

function NewsList({getNews,deleteNews,editNews}) {

  
  const rows = fakeData.map(({ id, name, image, createdAt }) =>
    <tr key={id}>
      <td>{name}</td>
      <td>{image}</td>
      <td>{createdAt}</td>
      <td>
        <div className="btn-group d-flex justify-content-center" role="group" aria-labelledby="actions">

          

          <button
            type="button"
            className="btn flex-grow-0 btn-danger"
            onClick={() => confirmAndDelete(id, CONTENT_TYPE)}>
            Eliminar</button>


          <button onClick={editNews} type="button" className="btn flex-grow-0 btn-outline-primary border-start-0">Editar</button>

        </div>
      </td>
    </tr>)

  return <div className="table-responsive">
    <table className="table container">
      <thead>
        <tr>
          <th scope="col">name</th>
          <th scope="col">image</th>
          <th scope="col">createdAt</th>
          <th className='text-center' scope="col" id="actions">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  </div>;
}

export default NewsList;

const fakeData = [{ "id": 1, "name": "Configurable real-time workforce", "image": "http://dummyimage.com/182x100.png/5fa2dd/ffffff", "createdAt": "6/1/2021" },
{ "id": 2, "name": "User-friendly composite hub", "image": "http://dummyimage.com/186x100.png/cc0000/ffffff", "createdAt": "11/22/2020" },
{ "id": 3, "name": "Horizontal holistic toolset", "image": "http://dummyimage.com/107x100.png/5fa2dd/ffffff", "createdAt": "6/14/2021" },
{ "id": 4, "name": "Triple-buffered interactive firmware", "image": "http://dummyimage.com/210x100.png/ff4444/ffffff", "createdAt": "10/9/2020" },
{ "id": 5, "name": "Networked didactic adapter", "image": "http://dummyimage.com/129x100.png/5fa2dd/ffffff", "createdAt": "5/30/2021" },
{ "id": 6, "name": "De-engineered zero tolerance middleware", "image": "http://dummyimage.com/173x100.png/dddddd/000000", "createdAt": "4/2/2021" },
{ "id": 7, "name": "Horizontal impactful focus group", "image": "http://dummyimage.com/219x100.png/cc0000/ffffff", "createdAt": "9/2/2020" },
{ "id": 8, "name": "Robust grid-enabled access", "image": "http://dummyimage.com/137x100.png/dddddd/000000", "createdAt": "1/17/2021" },
{ "id": 9, "name": "Customer-focused 5th generation internet solution", "image": "http://dummyimage.com/124x100.png/5fa2dd/ffffff", "createdAt": "2/5/2021" },
{ "id": 10, "name": "Fundamental 5th generation implementation", "image": "http://dummyimage.com/181x100.png/cc0000/ffffff", "createdAt": "12/1/2020" },
{ "id": 11, "name": "Total eco-centric capability", "image": "http://dummyimage.com/139x100.png/dddddd/000000", "createdAt": "6/24/2020" },
{ "id": 12, "name": "Open-architected well-modulated neural-net", "image": "http://dummyimage.com/103x100.png/5fa2dd/ffffff", "createdAt": "7/1/2020" },
{ "id": 13, "name": "Expanded even-keeled adapter", "image": "http://dummyimage.com/146x100.png/cc0000/ffffff", "createdAt": "9/9/2020" },
{ "id": 14, "name": "Expanded static parallelism", "image": "http://dummyimage.com/161x100.png/ff4444/ffffff", "createdAt": "8/9/2020" },
{ "id": 15, "name": "Function-based regional analyzer", "image": "http://dummyimage.com/191x100.png/cc0000/ffffff", "createdAt": "6/10/2021" }]