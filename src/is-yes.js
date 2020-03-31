export function isYes(response) {
    const resp = response.toLowerCase();
    if (resp.substring(0, 1) === 'y') { //Assuming that no negative answers start with 'y' 
        return true;
    } else {
        return false;
    }
}