export const getValueFromLS = item => {
    const getValue  =  localStorage.getItem(item);
    const parsedValue = JSON.parse(getValue);
    return parsedValue;
} 

export const setValueToLS = (item , value){
    const setItem = localStorage.setItem(JSON.stringify(item , value));
}