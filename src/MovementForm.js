export const MovementForm = (props) => {

  // const handleChangeAmount = (e) => {
  //   setNewAmount(parseInt(e.target.value))
  // }

  // const handleChangeSelect = (e) => {
  //   console.log(e.target.value)
  //   setType(e.target.value)
  // }

  return (
    <div className='container-form'>
      <form className='form' onSubmit={props.handleSubmit}>
          <label>Concepto:
            <input
              type='text'
              onChange={props.handleChange}
              value={props.formData.newMovement}
            />
          </label>

          <label>Monto:
            <input
              type='number'
              onChange={props.handleChange}
              value={props.formData.newAmount}
            />
          </label>

          <select onChange={props.handleChange} value={props.formData.type}>
            <option value='ingreso'>ingreso</option>
            <option value='egreso'>egreso</option>
          </select>

          <button>Ingresar movimiento</button>
        </form>
    </div>
  );
};