import React from "react";
import {Icon} from "./Icon";
import Head from 'next/head';

export const Picture = (props) => {
    const deleteImage = (name) => {
        console.log("Deleting image: " + name)
    };

    const downloadImage = (name) => {
        console.log("Downloading image: " + name)
    };

    return (
        <div className="picture-card">
            <Head>
                <title>"Picture Card"</title>
                <link href="/static/Picture.css" rel="stylesheet" />
            </Head>
            <div className="name">{props.name}</div>
            <img className="picture" src={`http://localhost:8080/images/${props.name}`} alt=""/>
            <Icon action={() => deleteImage(props.name)} name="bin.png"/>
            <Icon action={() => downloadImage(props.name)} name="download.png"/>
        </div>
    )
}