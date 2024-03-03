function Login(){
    return (
        <div style={{display: "grid", placeItems: "center", height: "60vh"}}>
            <form>
                <input type="email" name="email" required/><br /><br />
                <input type="password" name="password" required/><br /><br />
                <button type="submit">Вход</button>
            </form>
        </div>
    );
}

export default function LoginScreen(){
    return(<Login/>);
}
