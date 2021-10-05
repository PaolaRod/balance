import { useState, useEffect } from 'react';
import { Movement } from './Movement';
import { MovementForm } from './MovementForm';
import './App.css';

function App(props) {
  const [formData,setFormData] = useState({})
  const [newAmount, setNewAmount] = useState(0)
  const [amount, setAmount] = useState(0)
  const [movements, setMovements] = useState(props.movements)
  const [newMovement, setNewMovement] = useState('')
  // const [type, setType] = useState('ingreso')

  useEffect(() => {
    setMovements(movements)
  }, [])

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
    // setNewMovement(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(formData.type === 'ingreso'){
      setAmount(amount + newAmount)
    } else {
      setAmount(amount - newAmount)
    }
    
    const movementToAddToState = {
      concepto: newMovement,
      monto: newAmount,
    }
    
    setMovements([movementToAddToState, ...movements])
    
    setNewMovement('')
    setNewAmount('')
  }

  return (
    <div>
      <h1>Balance</h1>
      <p>{amount}</p>
      <ol>
        {movements
        .map((movement) => { 
          return (
            <Movement key={movement.id} {...movement} />    
          )
        })}
      </ol>
      <MovementForm 
      onChange={handleChange}              
      onSubmit={handleSubmit}
      formData={formData}
      />
    </div>
  );
}

export default App;
