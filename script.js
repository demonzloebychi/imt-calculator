

const button = document.getElementById('button')
const resultIMT = document.getElementById('imt-result')


function CalculateIMT(weight, height) {
    const heightIMT = (height / 100) * (height / 100);
    const IMT = weight / heightIMT;
    return IMT;
}


button.addEventListener('click', function() {

    const weight = document.getElementById('weight').value
    const height = document.getElementById('height').value

    const valueIMT = CalculateIMT(weight, height)

    const roundIMT = valueIMT.toFixed(2)
    // const roundIMT = Math.round(valueIMT)


   
    if (roundIMT <= 18.5) {
        text = 'Недостаточный вес';
    } else if (roundIMT > 18.5 && roundIMT <= 24.9) {
        text = 'Нормальный вес';
    } else if (roundIMT > 25 && roundIMT <= 29.9) {
        text = 'Избыточный вес';
    } else if (roundIMT > 30) {
        text = 'Ожирение';
    }





    resultIMT.innerText = `${roundIMT} - ${text}`

})