function signInWithGoogleWeb() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
        var user = result.user;

        user.getIdToken(true).then((token) => {
            window.signInWithGoogleWebCallback(true, user.email, token, null);
        }).catch((_) => {
            window.signInWithGoogleWebCallback(false, null, null, 'auth/token-error');
        });
    }).catch((error) => {
        window.signInWithGoogleWebCallback(false, error.email, null, error.code);
    });
}

function signInWithFacebookWeb() {
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
        var user = result.user;

        user.getIdToken(true).then((token) => {
            window.signInWithFacebookWebCallback(true, user.email, token, null);
        }).catch((_) => {
            window.signInWithFacebookWebCallback(false, null, null, 'auth/token-error');
        });
    }).catch((error) => {
        window.signInWithFacebookWebCallback(false, error.email, null, error.code);
    });
}

function signInWithAppleWeb() {
    var provider = new firebase.auth.OAuthProvider('apple.com');
    provider.addScope('email');
    provider.addScope('name');

    firebase.auth().signInWithPopup(provider).then((result) => {
        var user = result.user;

        user.getIdToken(true).then((token) => {
            window.signInWithAppleWebCallback(true, user.email, token, null);
        }).catch((_) => {
            window.signInWithAppleWebCallback(false, null, null, 'auth/token-error');
        });
    }).catch((error) => {
        window.signInWithAppleWebCallback(false, error.email, null, error.code);
    });
}

function decodeHTML(html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
};

//Employ defensive code that will analyze how your website is loaded to confirm it is the top level window, and redirect the user if this is not the case.
/*<style id="antiClickjack">
    body { display:none !important; }
</style>
<script type="text/javascript">
    if (self === top) {
        var antiClickjack = document.getElementById("antiClickjack");
        antiClickjack.parentNode.removeChild(antiClickjack);
    } else {
        top.location = self.location;
    }
</script>*/