import qs from "qs";
const URL = "http://192.168.233.155:3000";

export function getCats(){
    return RequestHandler(`${URL}/cats`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
    });
}