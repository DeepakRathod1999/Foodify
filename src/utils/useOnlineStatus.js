import React, { useEffect, useState } from 'react'

const useOnlineStatus = () => {
    const [onlineStatus,setOnlineStatus]=useState(true);
    const [status,setStatus]=useState('online');
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
            setStatus('offline');
        })
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
            setStatus('online');
        })
    },[]);

    return{ onlineStatus,status};
}

export default useOnlineStatus
