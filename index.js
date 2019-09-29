function renderNews(news) {
    const articles = JSON.parse(news);
    const articlesListEl = document.getElementsByClassName('articles-list')[0];
    articles.forEach((article) => {
        const articleEl = document.createElement('div');
        articleEl.className = 'article';
        articleEl.addEventListener('click', () => window.open(article.url, '_blank'));

        const articleImageEl = document.createElement('div');
        articleImageEl.className = 'article-image';
        articleImageEl.style.backgroundImage = `url(${article.urlToImage})`;

        const articleContentEl = document.createElement('div');
        articleContentEl.className = 'article-content';

        const articleTitleEl = document.createElement('div');
        articleTitleEl.className = 'article-title';
        articleTitleEl.innerHTML = article.title;

        const articleDescriptionEl = document.createElement('div');
        articleDescriptionEl.className = 'article-description';
        articleDescriptionEl.innerHTML = article.description;

        articleEl.appendChild(articleImageEl);
        articleContentEl.appendChild(articleTitleEl);
        articleContentEl.appendChild(articleDescriptionEl);
        articleEl.appendChild(articleContentEl);
        articlesListEl.appendChild(articleEl);
    });
}

function fetchNews() {
    const xobj = new XMLHttpRequest();
    xobj.overrideMimeType('application/json');
    xobj.open("GET", 'news.json', true);
    xobj.onreadystatechange = () => {
        if (xobj.readyState === 4 && xobj.status == '200') {
            renderNews(xobj.responseText);
        }
    }
    xobj.send(null);
}

fetchNews();
