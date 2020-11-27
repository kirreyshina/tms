import React from 'react';

const Form = props => {
  return (
    <form onSubmit={props.Method}>
      <input 
        type="text"
        placeholder="Введите город"
        name="city"
      />
      <button>Получить</button>
    </form>     
  )
};

export default Form;
