import React from 'react';
import {PictureList} from "../components/PictureList";
import Head from 'next/head';
import fetch from 'isomorphic-unfetch'

function Index({ pictures }) {

    console.log(pictures);

    return (
        <div className="Index">
            <Head>
                <title>Bassett family photos</title>
                <link href="/static/Index.css" rel="stylesheet" />
            </Head>
            <header className="Index-header">
                <p>Bassett family photos</p>
            </header>
            <PictureList pictures={pictures} />
        </div>
    );
}

Index.getInitialProps = async ctx => {
    const res = await fetch('http://localhost:8080/images');
    const json = await res.json();
    return { pictures: json }
};

export default Index
