onEvent('client.debug_info.left', event => {
    let lines = event.getLines()
    lines.addAll([
        '--------------------------',
        'Another Quality Modpack 2',
        '--------------------------'
    ])
});