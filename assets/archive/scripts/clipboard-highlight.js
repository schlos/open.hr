var highlights = document.querySelectorAll('.highlight');

[].forEach.call(highlights, function(highlight) {
    highlight.firstChild.insertAdjacentHTML('beforebegin', '<button class="btn" data-clipboard-highlight><img class="clippy" width="13" src="assets/images/clippy.svg" alt="Copy to clipboard"></button>');
});

var clipboardHighlights = new Clipboard('[data-clipboard-highlight]', {
    target: function(trigger) {
        return trigger.nextElementSibling;
    }
});

clipboardHighlights.on('success', function(e) {
    e.clearSelection();

    showTooltip(e.trigger, 'Copied!');
});

clipboardHighlights.on('error', function(e) {
    showTooltip(e.trigger, fallbackMessage(e.action));
});