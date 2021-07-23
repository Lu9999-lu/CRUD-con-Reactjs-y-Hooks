import React from 'react'

const UsuarioTabla = (props) => {

        console.log(props.users);

    return(
        <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Nombre de usuario</th>
            <th>Comportamiento</th>
          </tr>
        </thead>
        <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button className="button muted-button"
                        onClick={
                            ()=> {props.editRow(user)}
                        }>
                  Editar</button>
              <button 
              className="button muted-button"
              onClick={() => {props.deleteagregarUsuario(user.id)}}
              >
                  Elimar
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)
    

      }

export default UsuarioTabla;