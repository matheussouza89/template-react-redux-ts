import { useSelector } from 'react-redux';
import axios from "axios";
import { ApplicationState } from "../store/index";
import api from "../util/api";


export async function getData() {
    try{
        const basicAuth = 'Basic ' + "TOKEN";
        return await axios.get(api.urlBase + ``, {
            headers: {Authorization: basicAuth}
        }).then((reponse: any) => {
            
        })
    }catch(e){
        
    }
}

export async function getAllData(id: string) {
    try{
        const basicAuth = 'Basic ' + "TOKEN";
        return await axios.get(api.urlBase + ``, {
            headers: {Authorization: basicAuth}
        }).then((reponse: any) => {

        })
    }catch(e){

    }
}

export async function createData(dados:any) {

    const loading = useSelector<ApplicationState>(state => state.example.loading)
    try{
        const basicAuth = 'Basic ' + "TOKEN";
        //Validações

        if(!loading){
            return;
        }

        return await axios.post(api.urlBase + ``, {
            headers: {Authorization: basicAuth},
            data: {
                name: dados.name,
            }
        }).then((reponse: any) => {
            
        })
    }catch(e){

    }
}

export async function updateData(dados: any, dadosCopy: any) {

    const loading = useSelector<ApplicationState>(state => state.example.loading)
    try{
        const basicAuth = 'Basic ' + "TOKEN";
        //Validações

        if(dados === dadosCopy){
            return;
        }

        return await axios.put(api.urlBase + ``, {
            headers: {Authorization: basicAuth},
            data: {
                name: dados.name,
                id: dados.id
            }
        }).then((reponse: any) => {
            
        })
    }catch(e){

    }
}

export async function remove(id: string) {
    const loading = useSelector<ApplicationState>(state => state.example.loading)
    try{
        const basicAuth = 'Basic ' + "TOKEN";

        return await axios.delete(api.urlBase + ` ${id}`, {
            headers: {Authorization: basicAuth}
        }).then((reponse: any) => {
            
        })
    }catch(e){

    }
}