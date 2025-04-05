const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault(); //stops the default action of an element from happening

    //taking values
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('.result');
    const guide = document.querySelector('.guide')
    
    //error handling
    if(height == '' || height<0 || isNaN(height)){
        results.innerHTML = "Please give a valid height";
    }else if(weight == '' || weight<0 || isNaN(weight))
    {
        results.innerHTML = "Please give a valid weight";
    }else{
        //calculations
    const bmi = ((weight/ ((height *height) / 10000)).toFixed(1));
    //show result
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
        guide.innerHTML = "You are underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        guide.innerHTML = "You are in the normal range";
    } else {
        guide.innerHTML = "You are overweight";
    }
    }


})