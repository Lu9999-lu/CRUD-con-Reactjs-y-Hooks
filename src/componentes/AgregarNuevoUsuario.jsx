import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form'



const AgregarNuevoUsuario = (props) => {

    const {register,  handleSubmit, formState: { errors }} = useForm();
    const onsubmit = (data, e) =>{
     //   console.log(data);

        props.agregarUsuario(data)

//limpiar campos
      e.target.reset();
    }
    return(
        <form onSubmit={handleSubmit(onsubmit)}>
        <label>Nombre</label>
        <input type="text" name="name"   {...register("name", { 
                        required:{
                            value: true,
                            message: 'Campo obligatorio',                       
                        }
                    })} />
                    {errors.name && 
                    <span className="text-danger text-small d-block mb-2">
                        {errors.name.message}
                    </span>}
        <label>Nombre de usuario</label>
        <input type="text" name="username" {...register("username", { 
                        required:{
                            value: true,
                            message: 'Campo obligatorio',                        
                        }
                    })}   />
                   {errors.username && 
                    <span className="text-danger text-small d-block mb-2">
                        {errors.username.message}
                    </span>}
        <button>Agregar nuevo usuario</button>
      </form>
    );
}

export default AgregarNuevoUsuario;