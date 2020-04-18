import React from "react";
import Head from 'next/head';
import Link from "next/link";

export const AddPictureCard = () => {
    return (
        <div className="picture-card">
            <Head>
                <title>"Picture Card"</title>
                <link href="/static/PictureCard.css" rel="stylesheet" />
            </Head>
            <Link href="/add-picture">
                <img
                    className="picture"
                    src={`/static/plus.png`}
                    alt=""
                    onClick={() => console.log("Adding image")}
                />
            </Link>
        </div>
    )
}