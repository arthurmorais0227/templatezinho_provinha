import axios from 'axios';

export default async function GetPage() {
    let series;

    try{   
        const resp = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_SERIES}?limit=50`, {
            headers: {
                'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
            }
        });

        series = resp.data.data;
    } catch (error) {
        console.error(error);
    }

    return (
        <main>
            <h2>Busca feito pelo servidor com api-key privada</h2>
            <p>DevTools - Network: nem aparece, pois acontece no servidor</p>
            <p>Axios.get direto na API</p>
            <ul>
                {series.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </main>
    )
}