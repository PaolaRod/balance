export const Movement = ({ id, concepto, monto }) => {
  return (
    <div className='list-group-item'>
      <p>{concepto} {monto}</p>
    </div>
  );
};