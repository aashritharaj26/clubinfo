import React, { useState } from "react";
import {useForm} from 'react-hook-form'
import {  Link, useNavigate } from 'react-router-dom';
function EventOrganisers() {
    let navigate=useNavigate();
    let {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const [file,setFile]=useState();
    function handleChange(e){
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  //form submit
  function onRegisterFormSubmit(newUser){
    
    //make HTTP POST req to create user in API
    fetch('http://localhost:4000/users',{
      method:"POST",
      headers:{ "Content-Type":"application/json"},
      body:JSON.stringify(newUser)
    })
    .catch(err=>console.log("err in registration",err))
    alert("Your event is registered")
    navigate('/orgcal')
  }

  return (
    <div >
      <h1 className="display-3 text-info text-center">Event Registration form</h1>
      <form action="" className="w-50 mx-auto mt-3 bg-light p-4" onSubmit={handleSubmit(onRegisterFormSubmit)}>
        {/* Organiser name */}
        <div className="mb-3">
          <label htmlFor="orgname" className="form-label">Organiser Name</label>
          <input type="text" {...register("orgname")} id="orgname" className="form-control " />
        </div>
         {/* Event name */}
         <div className="mb-3">
          <label htmlFor="eventname" className="form-label">Event Name</label>
          <input type="text" {...register("eventname")} id="eventname" className="form-control " />
        </div>
         {/* Organiser email*/}
         <div className="mb-3">
          <label htmlFor="email" className="form-label"> Organiser Email</label>
          <input type="email" {...register("email")} id="email" className="form-control " />
        </div>

         {/* Club Name */}
        <div className="mb-3">
          <label htmlFor="clubn" className="form-label ">Select Club</label>
          <select id="clubn" className="form-select" {...register('clubn',{required:true})} defaultValue="">
            <option value="" disabled>Choose a club</option>
            <option value="Gdsc">GDSC</option>
            <option value="Csi">CSI</option>
            <option value="Ieee">IEEE</option>
            <option value="Acm">ACM</option>
            <option value="Nss">NSS</option>
            <option value="Creative Arts">Creative Arts</option>
            <option value="Scintillate">Scintillate</option>
            <option value="Dramatrics">Dramatrix</option>

          </select>
          {errors.clubn?.type === "required" && (
          <p className="text-danger">Please select a club</p>
        )}
        </div>
          {/* edate */}
  <div className="mb-3">
            <label htmlFor="date" className="form-label ">Date of Event</label>
            <input
            type="date"
            id="edate"
            placeholder='enter DOE'
            className="form-control"
            {...register("edate", {
              required: true})}
          />
             {errors.edate?.type === "required" && (
            <p className="text-danger ">please enter DOB</p>
          )}
        </div>
        <div className="mb-3">
            <label htmlFor="img">Upload Poster</label>
              <input type="file" onChange={handleChange} id="img" className="form-control" {...register('img')}/>
        </div>
        <div className="mb-5">

        </div>
       <Link to='/'> <button type="submit" className="btn btn-success  btn-info text-secondary d-block mx-auto fs-5">
          Register
        </button></Link>
      </form>
    </div>
  );
}

export default EventOrganisers;


