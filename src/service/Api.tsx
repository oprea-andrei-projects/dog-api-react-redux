import HttpResponse from "../model/HttpResponse";

export default class Api {

    api<U, T>(path: string, method: string, body: U, token: string): Promise<T> {
        const url: string = "http://localhost:8081/api/dogs" + path;
        const requestOptions: RequestInit = {
            method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: body == null ? null : JSON.stringify(body)
        };

        return fetch(url, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                throw error;
            });
    }

    getAllDogBreeds = async () => {
        try {
            let data = await this.api<null,string[] >("/breeds", "GET", null, "");

            // @ts-ignore

           // console.log('Data from API:',Object.keys(data));
            if (data instanceof Object) {
                let x = Object.keys(data);

                //console.log(x);
                return x;
            }

        } catch (error) {
            console.error('eroare -> ',error);
            throw error;
        }
    }

    getDasDogImage = async (name:string) =>{
        try{

            let data = await this.api<null, void>(`/image/${name}`, "GET", null, "");

            console.log(data);


            // @ts-ignore



               return data;




        }catch(e){
            console.log(e)
        }

    }


}






