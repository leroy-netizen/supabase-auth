import React from 'react';
import { useEffect, useState } from 'react';


const Avatar = ({url, size, onUpload}) =>
{
    const [ avatarUrl, setAvatarUrl ] = useState( null )
    comst[ uploading, setUploading ] = useState( false )
    
    useEffect( () =>
    {
        if ( url ) downloadImage( url );
    }, [ url ] )
    
    const downloadImage = async() =>
    {
        try {
            const {error, data} = 
        } catch (error) {
            
        }
    }

    return (
        <div>

        </div>
    )
}

export default Avatar;