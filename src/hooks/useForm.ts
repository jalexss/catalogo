import { useState, ChangeEvent } from "react";

/* recibe un objeto en el cual tiene las propiedades en  un campo de texto  */

export const useForm = ( initialState = {} ) => {
	const [ values, setValues ] = useState( initialState );

	const handleInputChange = ( event: ChangeEvent<HTMLInputElement> ): void => {

		setValues({
			...values,
			[ event.target.name ]: event.target.value 
		});	
	}

  const valuesWithLength: any = Object.entries(values).reduce(
    (previousValue, currentValue: any) => ({ ...previousValue, [currentValue[0]]: currentValue[1].length }),
    {}
  )

	return [ values as object, handleInputChange, valuesWithLength ];
}