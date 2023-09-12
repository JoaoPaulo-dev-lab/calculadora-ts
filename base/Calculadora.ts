export interface Calculadora {
    soma(primeiro: number, segundo: number): number
    sub(primeiro: number, segundo: number): number
    mult(primeiro: number, segundo: number): number
    divisao(primeiro: number, segundo: number): number
    showValue(): void
}