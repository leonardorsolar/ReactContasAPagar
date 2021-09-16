import axios from "axios";

/* Endereços para cada emulador/simulador:
** Genymotion:              http://10.0.3.2:3333/
** Emulador Android Studio: http://10.0.2.2:3333/
** Simulador IOS:           http://localhost:3333/
*/

const api = axios.create({
    //caminho onde estão as minahs apis
    //baseURL: 'http://192.168.15.3/apiModelo/'
    //baseURL: 'http://localhost/apiModelo/'
    baseURL: 'http://10.0.0.101:3333/apiModelo/',
    //baseURL: 'http://10.0.2.2:3333'
    //baseURL: 'http://10.0.0.100/apiModelo/'

});

export default api;