import { default as axios, AxiosInstance, AxiosError, AxiosResponse } from 'axios';

export class Api {    
    static ownResCode: number = 666;

    static client(baseUrl: string): AxiosInstance { 
        let api = axios.create({
            baseURL: baseUrl
        });

        api.interceptors.response.use((res: AxiosResponse) => {
            return res
        }, (err: AxiosError) => {
        if(typeof err.response === "undefined"){
            err.response = {
                data: "",
                status: Api.ownResCode,
                statusText: "No Server Response",
                headers: undefined,
                config: undefined
            };
        }else if(err.response.status === 401){
            window.location.replace("?logout=true");
        }
            
        return Promise.reject({ ...err });
    });
        
        return api;
    }
}