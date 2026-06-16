function openTab(tabName, containerId = 'indexMainContainer') {
    let i, tabContent, tabContainer;
    tabContainer = document.getElementById(containerId);
    tabContent = tabContainer.getElementsByClassName('tab-content');

    // hide content
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }


    let contentDiv = document.getElementById(tabName);
    if (contentDiv.innerHTML === '') {
        fetch(`indexMainContainerTabContent/${tabName}.html`)
            .then(response => response.text())
            .then(html => {
                contentDiv.innerHTML = html;
                contentDiv.style.display = 'block';
            })
            .catch(error => console.error('Error loading content:', error));
    } else {
        contentDiv.style.display = 'block';
    }
}

// para cargar la pestaña inicial (Home)
window.onload = function() {
    openTab('tab1');
};