import { setSegment } from "../redux/slicers/segmentSlice";

const WEBHOOK_URL = "https://webhook.site/b4e9b5bc-5d76-4e7f-8b96-9ce9a3b22c52/requests?sorting=newest";
const POST_WEBHOOK_URL = "https://webhook.site/b4e9b5bc-5d76-4e7f-8b96-9ce9a3b22c52"


export const getSegmentData = (setLoading) => async (dispatch) => {
    try {
        const response = await fetch(WEBHOOK_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                'api-key': 'b4e9b5bc-5d76-4e7f-8b96-9ce9a3b22c52'
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        dispatch(setSegment(data.data));
        setLoading(false);
    } catch (error) {
        console.error("Error fetching data:", error.message);
        setLoading(false);
    }
};


export const postSegmentData = (data, setLoading) => async (dispatch) => {
    try {
        const response = await fetch(POST_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log(responseData)
        console.log(data)
        setLoading(false);
    } catch (error) {
        console.error("Error fetching data:", error.message);


        setLoading(false);
    }
};
