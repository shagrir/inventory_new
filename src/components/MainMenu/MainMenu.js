import React,{ useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function MainMenu(props) {
    useEffect(() => {
        // axios.get(API_BASE_URL+'/user/me', { headers: { 'token': localStorage.getItem(ACCESS_TOKEN_NAME) }})
        // .then(function (response) {
        //     if(response.status !== 200){
        //       redirectToLogin()
        //     }
        // })
        // .catch(function (error) {
        //   redirectToLogin()
        // });
      })
    function redirectToLogin() {
    props.history.push('/login');
    }
    return(
        <div className="mt-2">
            MainMenu page content
        </div>
    )
}

export default withRouter(MainMenu);