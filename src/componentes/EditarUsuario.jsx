import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form'



    const EditarUsuario = (props) => {  
   // console.log(props.currentUser)
    
    const {register, setValue,  handleSubmit,  formState: {  errors }} = useForm({
        defaultValues: props.currentUser
    });
    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onsubmit = (data, e) =>{
       console.log(data);
       data.id = props.currentUser.id
       props.updateUser(props.currentUser.id, data)

    

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
        <button>Editar usuario</button>
      </form>
    );
}

export default EditarUsuario;