export const validarEmail = (email) => {
    if (/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
        return true;
    } else {
        return false;
    }

}

export const validarPassword = (password) => {
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        return true;
    } else {
        return false;
    }
}