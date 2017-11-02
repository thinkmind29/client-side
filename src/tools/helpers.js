export function isLogged() {
    if(localStorage.getItem('user') !== null)
        return true;
    else if(localStorage.getItem('user') === null)
        return false;
}