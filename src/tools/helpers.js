export const isLogged = () => {
    if(localStorage.getItem('user'))
        return true;
    else
        return false;
}