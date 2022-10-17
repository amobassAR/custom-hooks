import { useState } from "react"
export const useForm = (initialForm = {}) => {
  
    const [formState, setFormState] = useState(initialForm);


    const onInputChange = ({target})=>{
       const {name,value} = target;
       setFormState({
        ...formState,
        [name]:value
        });
        //console.log('onInputChange ex');
    };

    const onResetForm = ()=>{
      setFormState(initialForm);
      //console.log('onResetForm ex');
    };
  
    return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  }
}
