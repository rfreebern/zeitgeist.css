!function (window, document, undefined) {
    function createSwitcher (initialStyle) {
        var switcher = document.createElement('a');
        var switcherText = document.createTextNode(initialStyle);
        switcher.appendChild(switcherText);

        switcher.addEventListener('click', function (e) {
            switcher.innerHTML = toggleStyle();
        }, false);

        var switcherStyles = { background: '#999', opacity: '0.6',
            padding: '0.5em', fontSize: '18pt', color: 'black',
            position: 'fixed', top: '10px', right: '10px', zIndex: 99,
            borderRadius: '5px', boxShadow: '2px 2px 4px' };

        for (style in switcherStyles) {
            if (switcherStyles.hasOwnProperty(style)) {
                switcher.style[style] = switcherStyles[style];
            }
        }

        document.body.appendChild(switcher);
    }

    function getStyleFor (type) {
        for (var i = 0, l = document.styleSheets.length; i < l; i++) {
            if (document.styleSheets[i].ownerNode.id === type) {
                return document.styleSheets[i];
            }
        }
        throw new Error("No stylesheet link with ID " + type + " found.");
    }

    function toggleStyle () {
        getStyleFor(currentStyle()).disabled = true;
        getStyleFor(otherStyle()).disabled = false;
        var newStyle = currentStyle(otherStyle());
        return newStyle;
    }

    function currentStyle (set) {
        if (set) {
            window.localStorage['enabled'] = set;
        }
        return window.localStorage['enabled'];
    }

    function otherStyle () {
        return (window.localStorage['enabled'] === 'master' ? 'local' : 'master');
    }

    if (!currentStyle()) {
        currentStyle('local');
    }

    var enabledStyle = toggleStyle();
    createSwitcher(enabledStyle);
}(window, document);
