import axios from 'axios';

const searchImage = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID myxhSaa1g6IShp8r0tr-uW80JDPG_OgT1Hu-sritCD0',
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImage;