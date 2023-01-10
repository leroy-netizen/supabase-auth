import React from 'react';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';


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
            const { error, data } = await supabase.storage.from( 'avatars' ).download( path )
            if ( error ){
                throw error
            };
            const url = URL.createObjectURL( data )
            setAvatarUrl( url );
        } catch (error) {
            console.log( "Eror downloading image: ", error.message );
        }
    }
    const uploadAvatar = async (event) => {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

    return (
        <div>

        </div>
    )
}

export default Avatar;