import React from 'react'

function Input( {id,title,type,name,value,handData,customClasses}) {
    
  return (
    <div className="mb-3">
    <label htmlFor={id} className="form-label">{title}</label>
    <input type={type} name={name} className={'form-control ${customClasses}'} id={id}  onChange={handData} value={value} />
    {console.errors[name]&& <p className='text-danger'>{errors[name]} </p>}
</div>
  )
}

export default Input