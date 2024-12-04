import { setSegment } from "../redux/slicers/segmentSlice";

const WEBHOOK_URL = "https://webhook.site/e2b24e94-3b4b-4c5d-a897-8f0eaa5feb82/requests?sorting=newest";
const POST_WEBHOOK_URL = "https://webhook.site/e2b24e94-3b4b-4c5d-a897-8f0eaa5feb82"


export const getSegmentData = (setLoading) => async (dispatch) => {
    try {
        const response = await fetch(WEBHOOK_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                'api-key': 'e2b24e94-3b4b-4c5d-a897-8f0eaa5feb82'
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
