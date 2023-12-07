import { useRef, useEffect } from 'react';

const Login = () => {
    const ref = useRef(null);

    useEffect(() => {

        // Randomly select a CSS file
        const cssFiles = ['cute', 'horror'];
        const randomCssFile = cssFiles[Math.floor(Math.random() * cssFiles.length)];

        // Dynamically import the CSS file
        import(`./css/${randomCssFile}.css`)
            .then(() => {
                console.log(`Dynamically loaded ${randomCssFile}.css`);
            })
            .catch(err => console.error('Error loading CSS file:', err));

        if (ref.current) {
            // ref.current.innerHTML = '<p>Hahahahha</p>';
        }
    }, []);

    return (
        <div ref={ref}>
        <div class="login-container">
        <h1>Login</h1>
        <form action="#" method="post">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username"/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password"/>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
        </div>
    );
};

export default Login;

