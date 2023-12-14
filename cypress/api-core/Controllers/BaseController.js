export class BaseController{
    constructor(){

    }
    async authorize(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "password");
        urlencoded.append("username", "Admin");
        urlencoded.append("password", "Admin@Navi");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
        };

        const token =await fetch("http://167.114.201.175:5001/Token", requestOptions)
            .then(data => data.json())
            .then((json) => {
                return json.access_token})

        return token
    }

    async getClientsList(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", process.env.token );

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch("http://167.114.201.175:5001/api/clients?Sort=ClientId&Page=1&PageSize=10", requestOptions)
            .then(data => {return data.json()})

        return response
    }
}