import axios from 'axios';


export const getItems = async (params) => {
    return await axios({
        url: '/api/items',
        params
    });
}

export const getItem = async (id) => {
    try {
        let rs = await axios({
            url: '/api/item/' + id
        })
        // console.log(rs);
        return rs;
    } catch (e) {
        console.log('err');
        throw new Error('err');
    }
}