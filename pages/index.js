import React from 'react';
import {PictureList} from "../components/PictureList";
import Head from 'next/head';

export default function Index() {
    return (
        <div className="Index">
            <Head>
                <title>Bassett family photos</title>
                <link href="/static/Index.css" rel="stylesheet" />
            </Head>
            <header className="Index-header">
                <p>Bassett family photos</p>
            </header>
            <PictureList/>
        </div>
    );
}
