export default function Home(){
    return(<>
        <h1>Добро пожаловать домой!</h1>
        <h1>Я рада тебя видеть!</h1>

        <div>
            <h1>Зырь реальный сайт который написан на чистых HTML, CSS и JS!</h1>
            <a href="http://liza-ponya.infinityfreeapp.com/?i=1" target="_blank">Посетить</a>
            <br />
            <iframe style={{
                height: "70vh",
                width: "70vw",
                resize: "both",
                border: "10px solid white",
                borderRadius: "50px",
            }} src="http://liza-ponya.infinityfreeapp.com/?i=1" frameborder="0"></iframe>
        </div>
    </>);
}
