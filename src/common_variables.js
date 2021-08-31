export const BASE_URL = 'http://localhost:3000/';
// export const BASE_URL = 'https://8558-105-112-99-242.ngrok.io/';
export const BACKEND_BASE_URL = 'https://rooddi.techocraft.com/';

export const headerIncluder = (token, mainContentType = 'application/x-www-form-urlencoded') => {
    return {
        headers: {
            Authorization: 'Bearer '+token,
            'Content-Type': mainContentType
        }
    }
}
