export default function validate(values) {
    const validators = {
        email: value => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value),
        phoneNumber: value => /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value),
        name: value => value.length > 1,
        message: value => value.length > 5
    }

    const valid = {}

    Object.keys(values).map(field => valid[field] = validators[field](values[field]))

    return valid
}