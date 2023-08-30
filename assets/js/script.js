const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const heightInCentimeters = parseFloat(document.getElementById('height').value);
    const heightInMeters = heightInCentimeters / 100; // Convertendo para metros

    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!';
    } else if (bmi >=18.5 && bmi <=25){
        description = 'Voce esta no peso ideal!'
        document.getElementById('description').style.color = 'green'; 
    } else if (bmi >=25 && bmi <=30){
        description = 'Cuidado! Voce esta com sobrepeso.'
        document.getElementById('description').style.color = 'orange'; 
    } else if (bmi >=30 && bmi <=35){
        description = 'Cuidado! Voce esta com obesidade moderada.'
        document.getElementById('description').style.color = 'red'; 
    } else if (bmi >=35 && bmi <=40){
        description = 'Cuidado! Voce esta com obesidade severa.'
        document.getElementById('description').style.color = 'red'; 
    } else {
        description = 'Cuidado! Voce esta com obesidade morbida.'
        document.getElementById('description').style.color = 'red'; 
    }

    value.textContent = bmi;
    document.getElementById('description').textContent = description;
});
