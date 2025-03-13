export function parOuImpar(num) {
    const pares = [];
    for (let i = 1; i <= num; i++) {
        pares.push(2 * i);
    }
    return pares;
}