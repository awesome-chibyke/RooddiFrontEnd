import React, {createContext, useEffect, useState} from 'react';
import {fetchGetRequest, getRequest, postRequest} from "../redux/axios_call";

export const PostContext = createContext();

function ContextPostGet(props) {

    const [postArray, setPostArray] = useState([]);
    const [loading, setLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);

    const deletePost = async (id) => {

        try{
            setDeleteLoading(true)
            const {data} = await fetchGetRequest(`https://jsonplaceholder.typicode.com/posts/${id}`);

            let newArray = postArray.filter( post => post.id !== id );
            let count = 0;
            setPostArray(newArray);
            setDeleteLoading(false);
        }catch(e){
            console.log(e);
        }
    }

    const setANewPost = async (postObject) => {

        try{
            //send the value to the Api
            setLoading(true)
            let {data} = await postRequest('https://jsonplaceholder.typicode.com/posts',JSON.stringify(postObject), {headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                } });
            setPostArray([...postArray, {...data}]);
            setLoading(false);
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        const getAllPost = async () => {
            const {data} = await getRequest('https://jsonplaceholder.typicode.com/posts');
            setPostArray(data);
        }
        getAllPost();

    }, [])

    return (
        <PostContext.Provider value={{postArray, deletePost, setANewPost, loading, deleteLoading}} >
            {props.children}
        </PostContext.Provider>
    );
}


export default ContextPostGet;