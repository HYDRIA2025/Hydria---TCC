document.addEventListener('DOMContentLoaded', () => {
            const loginTab = document.getElementById('login-tab');
            const signupTab = document.getElementById('signup-tab');
            const loginForm = document.getElementById('login-form');
            const signupForm = document.getElementById('signup-form');

            loginTab.addEventListener('click', () => {
                loginTab.classList.add('active');
                signupTab.classList.remove('active');
                loginForm.classList.add('active');
                signupForm.classList.remove('active');
            });

            signupTab.addEventListener('click', () => {
                signupTab.classList.add('active');
                loginTab.classList.remove('active');
                signupForm.classList.add('active');
                loginForm.classList.remove('active');
            });
        });

        // Login Form
        const valueLogin = document.getElementById('formLogin');
        const loginEmail = document.getElementById('loginEmail');
        const loginPassword = document.getElementById('loginPassword');


        loginEmail.addEventListener('input', () => {
            valueLogin.value = loginEmail.value;
            console.log('Email:', valueLogin.value);
            
        })
        loginEmail.value = '';

        loginPassword.addEventListener('input', () => {
            campoValor.value = loginPassword.value
            console.log('Senha:', campoValor.value)
        })
        loginPassword.value = '';

        // Signup Form 
        const valueSignup = document.getElementById('formSignup');
        const signupName = document.getElementById('signup-name');
        const signupEmail = document.getElementById('signup-email');
        const signupPassword = document.getElementById('signup-password');

        signupName.addEventListener('input', () => {
            valueSignup.value = signupName.value
            console.log('Nome:', valueSignup.value)
        })
        signupName.value = '';

        signupEmail.addEventListener('input', () => {
            valueSignup.value = signupEmail.value
            console.log('Email:', valueSignup.value)
        })
        signupEmail.value = '';
        
        signupPassword.addEventListener('input', () => {
            valueSignup.value = signupPassword.value
            console.log('Senha:', valueSignup.value)
        })
        signupPassword.value = '';
