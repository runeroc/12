document.addEventListener('DOMContentLoaded', () => {
    const games = [
        {
         { title: "Assassin’s Creed", image: "https://upload.wikimedia.org/wikipedia/ru/thumb/5/52/Assassin%27s_Creed.jpg/230px-Assassin%27s_Creed.jpg", description: "Екшн-гра про пригоди асасинів.", category: "action", downloadLink: "https://drive.usercontent.google.com/download?id=1aQxLI8jE76buii8lbe5cN5QtJf4yDTNg&export=download&authuser=0" },
            { title: "Hitman: Absolution", image: "https://upload.wikimedia.org/wikipedia/uk/9/96/%D0%9E%D0%B1%D0%BA%D0%BB%D0%B0%D0%B4%D0%B8%D0%BD%D0%BA%D0%B0_Hitman_Absolution.jpg", description: "Пригодницький екшн про найманого вбивцю.", category: "action", downloadLink: "https://drive.usercontent.google.com/download?id=1dn-gttyU8bvcMCu7dj3svAn6dS04RM-N&export=download&authuser=0" },
            { title: "Dishonored", image: "https://upload.wikimedia.org/wikipedia/uk/thumb/a/ad/Dishonored_box_art.jpg/250px-Dishonored_box_art.jpg", description: "РПГ з елементами стелс-екшену.", category: "rpg", downloadLink: "https://drive.usercontent.google.com/download?id=1msqNAf9QXU1yqk74EN0my5nyzgaxFXjB&export=download&authuser=0" },
            { title: "Assassins Creed 2", image: "https://upload.wikimedia.org/wikipedia/ru/thumb/e/ee/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Assassins_Creed_2.jpg/230px-%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Assassins_Creed_2.jpg", description: "Assassin's Creed II — це історичний екшн з елементами стелсу, розроблений Ubisoft. Гравці вживаються в роль Еціо Аудиторе, молодого італійця, який стає асасином", category: "action", downloadLink: "https://drive.usercontent.google.com/download?id=1SvqHqZdKOpntytleKADDSNrugIgKawR1&export=download&authuser=0" },
            { title: "Assassin’s Creed: Brotherhood", image: "https://upload.wikimedia.org/wikipedia/ru/thumb/2/2a/Assassins_Creed_brotherhood_cover.jpg/230px-Assassins_Creed_brotherhood_cover.jpg", description: "Assassin’s Creed: Brotherhood — це екшн-адвенчур у відкритому світі, що відбувається в Римі під час Відродження. Гравець грає за Еціо Аудіторе, який має відновити вплив Ордену Асассинів.", category: "action", downloadLink: "https://drive.usercontent.google.com/download?id=1FZdryubAsyXUvBp42ZixxBeq-23Gxn0z&export=download&authuser=0" },
            { title: "Assassin's Creed Revelations", image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Assassins_Creed_Revelations_Cover.jpg/220px-Assassins_Creed_Revelations_Cover.jpg", description: "Assassin’s Creed: Revelations — це четверта частина серії Assassin's Creed, випущена в 2011 році. Гравець знову бере на себе роль Еціо Аудіторе, який подорожує до Константинополя, щоб розкрити таємниці та завершити свою подорож..", category: "action", downloadLink: "https://drive.usercontent.google.com/download?id=1Cw4BFHG3eTg9Gfij0T0I1eoK9HO-QXGh&export=download&authuser=0" },
            { title: "Assassin’s Creed III", image: "https://upload.wikimedia.org/wikipedia/ru/thumb/a/a6/Cover_art_for_Assassin%27s_Creed_III%2C_Mar_2012.jpg/274px-Cover_art_for_Assassin%27s_Creed_III%2C_Mar_2012.jpg", description: "Assassin’s Creed III — це екшн-адвенчур, що відбувається під час Американської революції. Гравець грає за Коннора Кенвея, напівіндіанця та Асассина, який бореться за свободу і справедливість.", category: "Action", downloadLink: "https://drive.usercontent.google.com/download?id=110WsNiVQzFvCYMnkzyA_sZ5eDmsn1wTD&export=download&authuser=0" },
            { title: "Assassin's Creed IV: Black Flag", image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Assassin%27s_Creed_IV_-_Black_Flag_cover.jpg/220px-Assassin%27s_Creed_IV_-_Black_Flag_cover.jpg", description: "Assassin’s Creed IV: Black Flag — це екшн-адвенчур, що відбувається в епоху піратства на Карибах. Гравець грає за Едварда Кенвея, пірата і Асассина,.", category: "Action", downloadLink: "https://drive.usercontent.google.com/download?id=1472ewbJ3evryGb8DxB_5AlZCQ3_SkR4G&export=download&authuser=0" },
            { title: "Assassin's Creed Rogue", image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Assassin%27s_Creed_Rogue.jpg/220px-Assassin%27s_Creed_Rogue.jpg", description: "Assassin’s Creed Rogue — це екшн-адвенчур, в якому гравець бере на себе роль Шея Патріка Кормака, колишнього Асассина, який стає Тамплієром. Події гри відбуваються під час Семирічної війни.", category: "action", downloadLink: "https://drive.usercontent.google.com/download?id=1B7Gjnyj8H1TiZ4-DK8gqph7K6suFg6wI&export=download&authuser=0" },

        },
        // Додати більше ігор тут
    ];

    const gameList = document.getElementById('game-list');

    function renderGames(games) {
        gameList.innerHTML = '';
        games.forEach(game => {
            const gameItem = document.createElement('div');
            gameItem.className = 'game-item';
            gameItem.innerHTML = `
                <img src="${game.image}" alt="${game.title}">
                <div class="game-info">
                    <h3>${game.title}</h3>
                    <p>${game.description}</p>
                    <a href="${game.link}" target="_blank">Перейти до гри</a>
                </div>
            `;
            gameList.appendChild(gameItem);
        });
    }

    renderGames(games);

    // Pagination functionality (example, add logic to handle pages)
    let currentPage = 1;
    const gamesPerPage = 5; // Adjust as needed

    function paginateGames() {
        const start = (currentPage - 1) * gamesPerPage;
        const end = start + gamesPerPage;
        renderGames(games.slice(start, end));
    }

    document.getElementById('prev-page').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            paginateGames();
        }
    });

    document.getElementById('next-page').addEventListener('click', () => {
        if (currentPage * gamesPerPage < games.length) {
            currentPage++;
            paginateGames();
        }
    });

    // Initial pagination
    paginateGames();

    // Search and filter functionality
    const searchInput = document.getElementById('search');
    const filterSelect = document.getElementById('filter');

    function filterGames() {
        const searchQuery = searchInput.value.toLowerCase();
        const filterCategory = filterSelect.value;

        const filteredGames = games.filter(game => {
            const matchesSearch = game.title.toLowerCase().includes(searchQuery) || game.description.toLowerCase().includes(searchQuery);
            const matchesCategory = !filterCategory || game.category === filterCategory;
            return matchesSearch && matchesCategory;
        });

        renderGames(filteredGames);
    }

    searchInput.addEventListener('input', filterGames);
    filterSelect.addEventListener('change', filterGames);
});
