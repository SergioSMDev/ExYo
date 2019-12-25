export const environment = {
    production: true,
    urlAuthConfig: {
        singUP:
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
        signIn:
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
        deleteUser:
            'https://identitytoolkit.googleapis.com/v1/accounts:delete?key=',
    },
    firebaseConfig: {
     // place for yuor firebase configuration
    },
};
