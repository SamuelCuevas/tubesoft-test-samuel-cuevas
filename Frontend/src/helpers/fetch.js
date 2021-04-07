import Swal from 'sweetalert2'

const fetchSaved = ( data, method = 'POST' ) => {

    const url = 'https://tubesoft-backend.herokuapp.com/chronometer/new';
    if( method === 'POST' ) {

        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        } );

    } else {
        alert('An error has ocurred');
    }

}

const handleFetch = async (h,m,s,ms) => {
    const t = `${h}:${m}:${s}:${ms}`;
    const resp = await fetchSaved({
      time: t
    });
    const body = await resp.json();
    console.log(body);
    if( body.ok ){
      Swal.fire( 'Success', `Time: ${ t }, has successfully registered`);
    }
}

export {
    handleFetch
}