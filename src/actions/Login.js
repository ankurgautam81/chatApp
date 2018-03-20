
import axios from 'axios';
import fetch from 'whatwg-fetch'
import LOGINs from '../constants/index'
const LOGIN = "LOGIN"

/*
http://172.16.101.244/v0.1.1/ui/stores/1/similar/product
{"link_type":"up_sell",	"product_ids":[	35737,	39614]}


http://localhost:8000/login
{"events":"login","uname":"ankur2",	"email":"ankur.gr93@gmail",	"password":"165guhj"}
*/

export async function loginDetails(loginParameters) {
    console.log('****login Action*******')
    let url = 'http://172.16.101.244/v0.1.1/ui/stores/1/similar/product'
    let localUrl = 'http://localhost:8000/login'

    axios({
        method: 'POST',
        url: url,
        data: {"link_type":"up_sell", "product_ids":[35737,  39614 ] },
        config: { headers: {'Content-Type': 'application/json' }}
    })
        .then(function (response) {
            //handle success
            console.log(response);
            return {
                type : LOGIN,
                payload:response
            }
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    /*axios({
        method: 'POST',
        url: localUrl,
        data: {"events":"login","uname":"ankur2",	"email":"ankur.gr93@gmail",	"password":"165guhj"},
        config: { headers: {'Content-Type': 'application/json' }}
    })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });*/


}