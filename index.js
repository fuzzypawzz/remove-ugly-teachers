(function () {
    const errorMessage = "Could not remove the ugly teachers, something must have changed. Please report this error to the developer."
    const targets = {
        selectors: [
            '.clouds',
            '.laerer-hold-top-grafik',
            '#kids'
        ],
        imageSources: [
            'forside.svg',
            'forside_laerere_jul.svg',
            'forside_laerere.svg'
        ]
    }

    try {
        const images = document.querySelectorAll('img')
        images.forEach(img => {
            targets.imageSources.forEach(src => {
                if (img.src.includes(src)) img.remove()
            })
        })

        targets.selectors.forEach(selector => {
            const matchingNodes = document.querySelectorAll(selector)
            matchingNodes.forEach(n => n.remove())
        })

    } catch (e) {
        console.warn(errorMessage);
        console.error('Remove ugly teachers plugin: ' + e)
    }
})()
