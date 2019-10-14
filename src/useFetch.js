import { useEffect } from 'react';

const useFetch = (url) => {
    //const [state, setState] = useState({ data: null, loading: true});

    useEffect(() => {
        //setState(state => ({ data: state.data, loading: true}));
        fetch(url)
            .then(response => {
                return response.text()
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [url]);
}

export default useFetch;