import axios from 'axios';

const apiEndpoint = 'https://api.johnlawrimore.com/store/products';
const apiConfig = {
    headers: {
        Authorization: 'cmiller'
    }
};


export const getProductById = (id) => new Promise((resolve, reject) => {
    axios.get(`${apiEndpoint}/${id}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});