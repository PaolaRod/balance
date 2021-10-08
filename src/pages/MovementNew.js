import { useState } from "react"
import { MovementForm } from "../components/MovementForm"
import { Movement } from "../components/Movement";

export const MovementNew = () => {
  const [formData, setFormData] = useState({
    type:'ingreso'
  })
  const [newAmount, setNewAmount] = useState()
  const [amount, setAmount] = useState(0)
  // const [newMovement, setNewMovement] = useState('')
  // const [type, setType] = useState('ingreso')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.type === 'ingreso') {
        setAmount(amount + parseFloat(formData.monto))
    } else {
        setAmount(amount - parseFloat(formData.monto))
    }

    // const movementToAddToState = {
    //     concepto: newMovement,
    //     monto: newAmount,
    // }

    // setMovements([movementToAddToState, ...movements])

    // setNewMovement('')
    // setNewAmount('')
  }

  return (
    <div className='container mt-5'>
      <h1>{amount}</h1>
      <MovementForm
        handleChange={handleChange}
        onSubmit={handleSubmit}
        formData={formData}
      />

      <ul className="list-group">
        {movements.map((movement) => {
          return <Movement key={movement.id} {...movement} />;
        })}
      </ul>

    </div>
  );
};