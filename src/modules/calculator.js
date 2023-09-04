import { animate } from "./helpers"

export const calculator = () => {

  try {
    const calc = document.getElementById('calc')
    const typeBalcony = document.getElementById('calc-type')
    const typeGlazing = document.getElementById('calc-type-material')
    const calcInput = document.getElementById('calc-input')
    const total = document.getElementById('calc-total')

    const regCalcInput =  /[^\d]/gi

    const validateInput = ()=> {
      calcInput.value = calcInput.value.replace(regCalcInput, '')
    }
    
    const calculate = () => {
      return +typeBalcony.value * +typeGlazing.value * +calcInput.value
    }

    const renderTotal = ()=> {
      calculate()

      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
        total.value = Math.floor(calculate() * progress)
        }
      });
    }

    calc.addEventListener('input', (e)=> {

      if (e.target == calcInput) {
        validateInput()
      }

      if ((+typeBalcony.value * +typeGlazing.value > 0) && calcInput.value) {
        renderTotal()

      } else {
        total.value = 0
      }
    })
  
  } catch (err) {
    console.log("на данной странице нет калькулятора");
  }
}
