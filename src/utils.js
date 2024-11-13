async function getToken() {
    try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                'Content-Type': "application/x-www-form-urlencoded",
                'Authorization': `Basic ${btoa("c6f6a048adb349e79f56c4fc2d5d95ff" + ":" + "7e445f805b804305ab18596b74d12a48")}`
            },
            body: "grant_type=client_credentials"
        });
        
        const auth = await response.json();
        // console.log(13 , auth);
        localStorage.setItem('token', `${auth.token_type} ${auth.access_token}`);
        
    } catch (error) {
        console.log(error);   
    }
}

export { getToken };
