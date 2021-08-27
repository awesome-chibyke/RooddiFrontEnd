import React, {useContext, useState} from 'react';
import {PostContext} from "../Contexts/ContextPostGet";
import {editUserProfileAction} from "../redux";

function TestPostContext(props) {

    const {postArray, deletePost, setANewPost, loading, deleteLoading} = useContext(PostContext);

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('');
    const [deleteId, setDeleteId] = useState(0);

    const callSetPost = async () => {
        await setANewPost({
            title: title,
            body: body,
            userId: 1,
        });
        setTitle('');
        setBody('');
    }

    return (
        <>

            <section
                className="bg-dark-body bg-food-white pt-80 pb-20"
                data-overlay={7}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12 bg-food-white">
                            <div className="text-center">
                                <h2 className="page-title text-white" />
                                <ol className="breadcrumb bg-transparent justify-content-center">
                                    <li
                                        className="breadcrumb-item text-white active"
                                        aria-current="page"
                                    />
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-50" style={{ backgroundColor: "#fafbfd" }}>
                <div className="container">
                    <div className="row justify-content-center g-0">
                        <div className="col-7 col-sm-7">
                            <div className="box box-body">
                                <div className="content-top-agile pb-0 pt-20">
                                    <h2 className="text-primary">List OF Post</h2>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-12" style={{marginTop:"20px"}}>
                                        {postArray.map(post => (
                                            <>
                                                <div className="col-10 col-sm-10">
                                                    <h5 style={{marginTop:"20px"}} key={post.id}> <a href={'single_post/'+post.id}>{post.title}</a>  </h5>
                                                </div>
                                                <div className="col-2 col-sm-2">
                                                    <span className="btn btn-sm btn-warning" style={{cursor:"pointer"}} onClick={ async () => { setDeleteId(post.id); await deletePost(post.id); }  }>{deleteLoading === true && deleteId === post.id ? ('Loading....') : ('Delete') }</span>
                                                </div>
                                            </>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5 col-sm-5">
                            <div className="box box-body">
                                <div className="content-top-agile pb-0 pt-20">
                                    <h2 className="text-primary">Add New Post</h2>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-12" style={{marginTop:"20px"}}>
                                        <label for="">News Title</label>
                                        <input className="form-control ps-15 bg-transparent btn-lg" id="name" value={title} onChange={e => setTitle(e.target.value)} />
                                    </div>
                                    <div className="col-12 col-sm-12" style={{marginTop:"20px"}}>
                                        <label htmlFor="">News Body</label>
                                        <textarea onChange={e => setBody(e.target.value)} className="form-control ps-15 bg-transparent btn-lg" id="name" value={body} ></textarea>
                                    </div>

                                    <div className="col-12 col-sm-12" style={{marginTop:"20px"}}>
                                        <button onClick={() => callSetPost() } className="btn btn-primary btn-block btn-lg">{loading === true? ('Loading...') : ('Add Post')}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TestPostContext;