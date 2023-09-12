import { Calculadora } from "./Calculadora";

type Operacao = "+" | "-" | "*" | "/";
export class Extensao implements Calculadora{
    private value: number
    constructor(){
        this.value = 0
    }
    private logica(primeiro: number, operador: Operacao, segundo: number): number{
        switch (operador) {
            case "+":
                return this.soma(primeiro, segundo)
            case "-":
                return this.sub(primeiro, segundo)
            case "*":
                return this.mult(primeiro, segundo)
            case "/":
                return this.divisao(primeiro, segundo)
        
            default:
                break;
        }
        return 0
    }
    public calculo(primeiro: number, operador: Operacao, segundo: number){
        let resultado = this.logica(primeiro, operador, segundo)
        this.value = resultado
    }

    soma(primeiro: number, segundo: number): number {
        return primeiro + segundo
    }
    sub(primeiro: number, segundo: number): number {
        return primeiro - segundo
    }
    mult(primeiro: number, segundo: number): number {
        return primeiro * segundo
    }
    divisao(primeiro: number, segundo: number): number {
        return primeiro / segundo
    }
    showValue(): void {
        console.log(this.value)
    }
}