import { toast } from "react-toastify";
import { apiUrl } from "../config.json";
const createArticleEndPoint = `${apiUrl}/articles`;

export function createNewArticle(article) {
    const articleData = { 
        title: article.title,
        article: article.article,
        categoryId: article.categoryId
    };
    fetch(createArticleEndPoint, {
        method: 'Post',
        body: JSON.stringify(articleData),
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