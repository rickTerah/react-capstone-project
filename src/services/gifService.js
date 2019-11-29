import { toast } from "react-toastify";
import { apiUrl } from "../config.json";
const postGifEndPoint = `${apiUrl}/gifs`;

export async function postNewGif(gif) {
    const fd = new FormData();
    const file = await fd.append('image', gif.image);
    const gifData = { 
        title: JSON.stringify(gif.title),
        image: file
    };
    fetch(postGifEndPoint, {
        method: 'Post',
        body: gifData,
        headers: {
          'content-type': "application/json"
        }
    })
    .then(response => response.json())
        .then(data => {
            if(data.status === 'error'){
                return toast.error(data.error);
            }
            // toast.success('Article');
            console.log(data);
        })
}