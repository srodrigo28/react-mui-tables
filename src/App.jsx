import { useState } from 'react'
import './App.css'
import { TableAxios } from "./views/TableAxios"
import axios from 'axios'

function App() {
  const [data, setData] = useState()
  const [price, setPrice] = useState()
  const [description, setDescription] = useState()
  const url = "http://localhost:3000/produtos";

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!data){ alert("Please data")}
    if(!price){ alert("Please price")}
    if(!description){ alert("Please description")}

    axios.post( url, {
      description,
      data,
      price
    })
    .then(function (response) {
      alert('Success')
    })
    .catch(function (error) {
      alert('Error ' + error )
      console.log(error);
    });

  }

  return (
    <div className='d-flex flex-column'>

      <button type="button" className="btn btn-primary w-25 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">adicionar</button>

      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <input type="text"   value={description} onChange={ e => setDescription(e.target.value) } className="form-control" placeholder="Descrição" />
                  <input type="number" value={price}       onChange={ e => setPrice(e.target.value) } className="form-control mt-2" placeholder="Valor" />
                  <input type="date"   value={data}        onChange={ e => setData(e.target.value) } className="form-control mt-2" placeholder="Data" />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">Inserir</button>
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                </div>
            </form>
          </div>
        </div>
      </div>
      <TableAxios />
    </div>
  )
}

export default App
