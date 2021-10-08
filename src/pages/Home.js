import { useState, useEffect } from "react";
import { Movement } from "../components/Movement";
import { Link } from "wouter";

export const Home = () => {

  const movementsInitial = [
    {
      id: 1,
      concepto: 'Bono vacacional',
      monto: 15000
    },
    {
      id: 2,
      concepto: 'Retiro cajero',
      monto: 10000
    }
  ]
  
  const [movements, setMovements] = useState(movementsInitial)

  useEffect(() => {
    setMovements(movementsInitial)
  }, [])

  return (
    <div>
      <h1>Balance</h1>
      {/* <p>{amount}</p> */}
      <ul className="list-group">
        {movements.map((movement) => {
          return <Movement key={movement.id} {...movement} />;
        })}
      </ul>
      <Link className="btn btn-primary" to="/movements/new">
        +
      </Link>
    </div>
  );
}