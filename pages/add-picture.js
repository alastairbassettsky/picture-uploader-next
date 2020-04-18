import React, {useState} from 'react';
import Head from 'next/head';
import Link from "next/link";

export default function AddPicture() {
    const [text, setText] = useState("");

    const handleTextInput = (event) => {
        setText(event.target.value);
    };

    const handleFileUpload = (event) => {
        console.log(event.target.files[0]);
    };

    const handleSubmit = () => {
        console.log(text);
    };

    return (
        <div className="AddPicture">
            <Head>
                <title>Add a new photo</title>
                <link href="/static/Index.css" rel="stylesheet" />
            </Head>
            <header className="Index-header">
                <p>Add a new photo</p>
            </header>
            <Link href="/index">
                <a>Don't want to add a new picture?</a>
            </Link>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nameInput" value={text} onChange={handleTextInput} />
                <input type="file" name="fileInput" onChange={handleFileUpload} />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}
