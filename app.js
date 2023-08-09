let result = document.getElementById('output') ;


const showToOutput = (value) => {
    result.value = result.value + value ;
}

const clearOutput = () => {
    result.value = 0;
}

const calculate = () => {
    try {
        result.value = eval(result.value).toFixed(2).toString();
    }
    catch (err) {
        result.value = "Error";
    }
}

const remove = () => {
    result.value = result.value.slice(0, -1);
}