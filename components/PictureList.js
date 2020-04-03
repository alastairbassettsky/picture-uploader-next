import React, {useState} from 'react';
import {Picture} from "./Picture";
import axios from 'axios';

const testData = [
    "Lake District",
    "Sailing",
    "Skiing"
];

export const PictureList = () => {

    function getAllPictureNames () {
        axios.get('http://localhost:8080/images')
            .then(response => response.data)
            .then(responseJson => {
                console.log(responseJson);
                setPictures(responseJson)
            });
    }

    const [pictures, setPictures] = useState([]);

    getAllPictureNames();

    return (
        <div className="picture-list">
            {testData.map(picture =>
                <Picture
                    key={picture}
                    name={picture}
                />
            )}
        </div>
    )
};