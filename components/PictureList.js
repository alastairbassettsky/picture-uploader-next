import React from 'react';
import {Picture} from "./Picture";

export const PictureList = ({pictures}) => {

    return (
        <div className="picture-list">
            {pictures.map(picture =>
                <Picture
                    key={picture}
                    name={picture}
                />
            )}
        </div>
    )
};