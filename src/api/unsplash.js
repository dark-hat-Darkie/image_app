import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Py8r4B_ct412_hyUPWpt2wbkZNO__HcIjpM2TT0NmcE'
    }
});