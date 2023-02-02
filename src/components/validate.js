

export const validation = (values) =>{
    let errors = {}

    if(!values.username) {
        errors.username = "Name required"
    }

    if(!values.password) {
        errors.password = "password required"
    }

    return errors;
}
