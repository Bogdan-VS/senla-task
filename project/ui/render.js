class Render {
    static body = document.querySelector('body');

    static renderPage() {
        body.append(Render.drawMainPage());
    }

    static drawMainPage = () => `
        <header>
            <div class="header-wrapper">
                <h1 class="sity-title">Игра в города</h1>
                <button class="siti-start__btn">Начать</button> 
            </div>
        </header>
    `;
}

export default Render;