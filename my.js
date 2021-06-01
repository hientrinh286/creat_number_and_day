function confirm() {    
    let number = +document.getElementById('number').value;
    switch (number){
        case 1:
            document.getElementById('result').innerHTML = "Today is Sunday."
            break;
        case 2:
            document.getElementById('result').innerHTML = "Today is Monday."
            break;
        case 3:
            document.getElementById('result').innerHTML = "Today is Tuesday."
            break;
        case 4:
            document.getElementById('result').innerHTML = "Today is Thursday."
            break;
        case 5:
            document.getElementById('result').innerHTML = "Today is Friday."
            break;
        case 6:
            document.getElementById('result').innerHTML = "Today is Satday."
            break;
        case 7:
            document.getElementById('result').innerHTML = "Today is Sunday."
    }
}