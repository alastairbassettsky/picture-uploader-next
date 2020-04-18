import React from 'react';
import {PictureCard} from "./PictureCard";
import {AddPictureCard} from "./AddPictureCard";

export const PictureList = ({pictures}) => {

    return (
        <div className="picture-list">
            {pictures.map(picture =>
                <PictureCard
                    key={picture}
                    name={picture}
                />
            )}
            <AddPictureCard />
        </div>
    )
};