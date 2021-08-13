export const BASE_URL = 'http://localhost:3000/';
export const BACKEND_BASE_URL = 'https://rooddi.techocraft.com/';

export const headerIncluder = (token) => {
    return {
        headers: {
            Authorization: 'Bearer '+token,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
}
