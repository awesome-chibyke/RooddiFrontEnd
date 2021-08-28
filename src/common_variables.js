//export const BASE_URL = 'http://localhost:3000/';
export const BASE_URL = 'http://localhost:3000/';
export const BACKEND_BASE_URL = 'https://rooddi.techocraft.com/';

export const headerIncluder = (token, mainContentType = 'application/x-www-form-urlencoded') => {
    return {
        headers: {
            Authorization: 'Bearer '+token,
            'Content-Type': mainContentType
        }
    }
}
