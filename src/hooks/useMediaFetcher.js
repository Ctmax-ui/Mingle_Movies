import { useEffect, useState } from 'react'

const useMediaFetcher = (url, dependec) => {

    const [isLoading, setIsLoading] = useState(false)
    const [fetchedData, SetFetchedData] = useState(null)
    const [err, setErr] = useState(null)


    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true)
                const result = await (await fetch(url, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
                    }
                })).json();
                SetFetchedData(result);
            } catch (err) {
                setErr(err);
            }
        }

        fetchData()
        setIsLoading(false)
    }, [url, dependec])




    return ({ isLoading, fetchedData, SetFetchedData, err })
}

export default useMediaFetcher