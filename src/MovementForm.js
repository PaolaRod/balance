export const MovementForm = (props) => {
  
  return (
    <div className='container mt-5'>
      <form onSubmit={props.handleSubmit}>
          <div className='form-group'>Concepto:
            <input
              className='form-control'
              type='text'
              name='concepto'
              onChange={props.handleChange}
              value={props.formData.concepto}
            />
          </div>

          <div className='form-group'>Monto:
            <input
              className='form-control'
              type='number'
              name='monto'
              onChange={props.handleChange}
              value={props.formData.monto}
            />
          </div>

          <div className='form-group'>
          <select className="form-control" onChange={props.handleChange} name='type' value={props.formData.type}>
            <option value='ingreso'>ingreso</option>
            <option value='egreso'>egreso</option>
          </select>
          </div>

          <button className='btn btn-primary'>Ingresar movimiento</button>
      </form>
    </div>
  );
};