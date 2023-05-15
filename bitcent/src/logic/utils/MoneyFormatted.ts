export default class MoneyFormatted {
    private static _lingua = "pt-BR"
    private static _moeda = "BRL"

    static format(num: number): string {
        return (num ?? 0).toLocaleString(MoneyFormatted._lingua, {
            style: "currency", currency: MoneyFormatted._moeda
        })
    }
}