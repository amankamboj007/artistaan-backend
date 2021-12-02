
const getErrors = (errors) => {

    switch (errors[0].code) {
        case "any.empty":
            errors[0].message = `error${toTitleCase(errors[0].local.key)}Required`;
            break;
        case "any.required":
            errors[0].message = `error${toTitleCase(errors[0].local.key)}Required`;
            break;
        case "string.email":
            errors[0].message = `error${toTitleCase(errors[0].local.key)}Invalid`;
            break;
        case "string.base":
            errors[0].message = `error${toTitleCase(errors[0].local.key)}String`;
            break;
        case "number.base":
            errors[0].message = `error${toTitleCase(errors[0].local.key)}Number`;
            break;
        case "string.max":
            errors[0].message = `error${toTitleCase(errors[0].local.key)}Length`;
            break;
        case "string.min":
            errors[0].message = `error${toTitleCase(errors[0].local.key)}Length`;
            break;
        case "string.pattern.base":
            errors[0].message = `error${toTitleCase(errors[0].local.key)}Invalid`;
            break;
        default:
            break;
    }
    return errors[0];
}

const toTitleCase = (str) => {
    return str.charAt(0).toUpperCase() + str.substr(1);
}

module.exports = {
    getErrors
}