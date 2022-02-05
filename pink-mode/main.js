function toggleTheme() {
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'css/light.css') {
        theme.setAttribute('href', 'css/pink.css');
    } else {
        theme.setAttribute('href', 'css/light.css');
    }
}