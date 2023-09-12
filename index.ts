import { Extensao } from "./base/Extensao";

let calc = new Extensao()
calc.calculo(1, "+", 5)
calc.showValue()

calc.calculo(1, "-", 5)
calc.showValue()

calc.calculo(1, "*", 5)
calc.showValue()

calc.calculo(1, "/", 5)
calc.showValue()