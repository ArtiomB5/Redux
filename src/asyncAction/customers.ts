import { dispatchType } from "../store/index";
import {
  setCustomersAC,
  customersRAType,
  customerType
} from "../store/customersReducer";

export type responseObjType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type responseType = Array<responseObjType>;

export const fetchCunstomers = () => {
  return (dispatch: dispatchType) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        let customersArray: Array<customerType> = json.map(
          (userObj: responseObjType) => {
            return { name: userObj.name, id: userObj.id };
          }
        );
        console.log(customersArray);
        dispatch(setCustomersAC(customersArray) as customersRAType);
      });
  };
};
