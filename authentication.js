(function () {
    window.AuthenticationService = new XeroIdentity.AuthenticationService({
        authority: "http://localhost:5005",
        clientId: "sample_product_web_html",
        scope: "xero_identity_test",
        redirectUri: window.location.origin + "",
        silentRedirectUri: window.location.origin + "/silent.html",
        modalRedirectUri: window.location.origin + "/modal.html",
        postLogoutRedirectUri: window.location.origin + "/"
    });
    
    AuthenticationService.getUserProfileWithAutomaticSignIn().then(result => {
        window.UserProfile = result;
        var decodedToken = jwt_decode(JSON.parse(sessionStorage["oidc.user:http://localhost:5005:sample_product_web_html"]).access_token);
        console.log(decodedToken);
        setTimeout(()=>{
            XERO.Navigation.init(MyNavigation.header, document.getElementById("header"));
            document.getElementById('token').innerHTML = JSON.stringify(decodedToken, null, 2);
        }, 1000);
    });

}());