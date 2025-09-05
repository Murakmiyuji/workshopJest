export function jogadorValidator(nome, idade, time) {
    const errors = [];

    if (!nome || typeof nome !== "string" || nome.trim().length === 0) {
        errors.push("Nome é obrigatório e deve ser uma string não vazia.");
    }

    if (!idade || typeof idade !== "number" || idade <= 0) {
        errors.push("Idade é obrigatória e deve ser um número maior que zero.");
    }

    if (!time || typeof time !== "string" || time.trim().length === 0) {
        errors.push("Time é obrigatório e deve ser uma string não vazia.");
    }

    return errors.length > 0 ? { valid: false, errors } : { valid: true };
}
