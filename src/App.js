import React, { useState } from 'react'
import UsuarioTabla from './componentes/UsarioTabla'
import {v4 as uuidv4} from 'uuid';
import AgregarNuevoUsuario from './componentes/AgregarNuevoUsuario';
import EditarUsuario from './componentes/EditarUsuario';


function App() {

      const usersData = [
        { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
        { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
        { id: uuidv4(), name: 'Ben', username: 'benisphere' },
      ]

      //estado
      const  [users, setUsers] = useState(usersData);


      // Agregar Usuarios

      const agregarUsuario = (user)=>{
        user.id = uuidv4()
        setUsers([
          ...users,
          user
        ])
      }

    //Elimar
      const deleteagregarUsuario = (id) =>{
        const arrayFiltrado = users.filter(user => user.id !== id);
        setUsers(arrayFiltrado);
      }


      //Editar Usuario 

      const [editing, setEditing] = useState(false);
      const [currentUser, setcurrentUser,] = useState ({
        id: null, name: '', username: ''
      });
      const editRow = (user) => {
        setEditing(true);
        setcurrentUser({
          id: user.id, name: user.name, username: user.name
        })
      }
      const updateUser = (id, updateUser) =>{
        setEditing(false);
        setUsers(users.map(user => (user.id === id ? updateUser: user)))
      }
      return (
        <div className="container">
        <h1>Aplicación CRUD</h1>
        <div className="flex-row">
          <div className="flex-large">
          
          {
            editing ? (
              <div>
              <h2>Editar usuario</h2>
          <EditarUsuario
          currentUser={currentUser}
          updateUser={updateUser}/>
          </div>
            ) : (
              <div>
              <h2>Agregar usuario</h2>
            <AgregarNuevoUsuario agregarUsuario={agregarUsuario}/>
          </div>
            )
          }
    </div>
          <div className="flex-large">
            <h2>Ver usuario</h2>
            <UsuarioTabla users={users} deleteagregarUsuario={deleteagregarUsuario}  editRow={editRow}/>    
          </div>
        </div>
      </div>
      );

}

export default App;
