class PokemonChineseLearner {
    constructor() {
        this.init();
    }

    init() {
        console.log('宝可梦汉字孵化园游戏初始化');
        this.renderMainMenu();
    }

    renderMainMenu() {
        const container = document.getElementById('game-container');
        container.innerHTML = `
            <div class="main-menu">
                <h1>宝可梦汉字孵化园</h1>
                <p>欢迎来到汉字学习冒险！</p>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.game = new PokemonChineseLearner();
});
