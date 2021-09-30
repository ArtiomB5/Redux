import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { rootReducerType } from "./store";
import { useState } from "react";
import { addCashAC, getCashAC } from "./store/cashReducer";
import {
  customerType,
  addCustomerAC,
  removeCustomerAC
} from "./store/customersReducer";
import { fetchCunstomers } from "./asyncAction/customers";

export default function App() {
  const [inputValue, setinputValue] = useState("");

  const dispatch = useDispatch();
  const cash = useSelector((state: rootReducerType) => state.cashR.cash);
  const customers = useSelector(
    (state: rootReducerType) => state.customersR.customers
  );

  const addCash = (userCashSum: number) => {
    dispatch(addCashAC(userCashSum));
  };

  const getCash = (userCashSum: number) => {
    dispatch(getCashAC(userCashSum));
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setinputValue(event.currentTarget.value);
  };

  const addCustomer = () => {
    if (inputValue.trim() !== "") {
      const newCustomer = { name: inputValue, id: Date.now() };
      dispatch(addCustomerAC(newCustomer));
      setinputValue("");
    }
  };

  const removeCustomer = (id: number) => {
    dispatch(removeCustomerAC(id));
  };

  return (
    <div className="App">
      <div>
        <div>
          <h2>Баланс: {cash}</h2>
        </div>
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счета
        </button>
      </div>
      <hr />
      <div>
        <h2>Клиенты</h2>
        <input type="text" onChange={onChangeHandler} value={inputValue} />
        <button onClick={addCustomer}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCunstomers())}>
          Добавить всех клиентов из базы
        </button>
        <div>
          {customers.length === 0 ? (
            <h3>"Клиенты отсутствуют"</h3>
          ) : (
            customers.map((customer: customerType) => (
              <div>
                {customer.name}
                <button onClick={() => removeCustomer(customer.id)}>Del</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
