import Head from "next/dist/next-server/lib/head";
import React from "react";

export function Icon(props) {
    return (
        <div className="icon-card">
            <Head>
                <title>"Icon"</title>
                <link href="/static/Icon.css" rel="stylesheet" />
            </Head>
            <img
                className="icon"
                src={`/static/${props.name}`}
                alt="icon"
                onClick={props.action}
            />
        </div>
    )
}