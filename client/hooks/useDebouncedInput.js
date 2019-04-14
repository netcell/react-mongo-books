import { useDebounce } from "./useDebounce";
import { useInput } from './useInput';

export const useDebounceInput = (initialValue, delay) => {
	const {
		value, 
		handleChange
	} = useInput(initialValue);
	
	const debouncedValue = useDebounce(value, delay);

	return {
		value,
		debouncedValue, 
		handleChange
	}
}