import { default as axios, AxiosError, AxiosResponse } from 'axios';
import { Api } from './Api';

export class AuthApi {
    static client = Api.client('/api/auth');

    static login(username: string, password: string, rememberMe: boolean){
        return axios.create({
            baseURL: '/api/auth'
        }).post('/Login', {
            username: username,
            password: password,
            rememberMe: rememberMe
        })
    }
    
    static getDeliveryDates(){
        return this.client.get('/DeliveryDates');
    }

    static setDeliveryDate(date: string, pickup: boolean) {
        return this.client.post('/SetDeliveryDate', {
            date: date,
            pickup: pickup
        });
    }

    static requestUsername(email: string) {
        return this.client.post('/RequestUsername?email=' + email);
    }

    static requestPassword(username: string) {
        return this.client.post('/RequestPassword?username=' + username);
    }

    static resetPassword(guid: string, token: string, newPassword: string) {
        return this.client.post('/ResetPassword', {
            guid: guid,
            token: token,
            newPassword: newPassword
        });
    }

    static changePassword(oldPassword: string, newPassword: string) {
        return this.client.post('/ChangePassword', {
            oldPassword: oldPassword,
            newPassword: newPassword
        });
    }
}