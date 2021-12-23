(function () {
    function removeTeachers() {
        const errorMessage = "Could not remove the ugly teachers, something must have changed. Please report this error to the developer."
        const targets = {
            selectors: [
                '.clouds',
                '#kids'
            ],
            imageSources: [
                'forside.svg',
                'forside_laerere_jul.svg',
                'forside_laerere.svg',
                'forside-jul.svg',
                'laerer'
            ],
            elementsWithBackgroundImages: [
                '.my-week-background-wrapper'
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

            targets.elementsWithBackgroundImages.forEach(selector => {
                const matchingNodes = document.querySelectorAll(selector)
                matchingNodes.forEach(n => {
                    n.style.backgroundImage = 'url()'
                })
            })

        } catch (e) {
            console.warn(errorMessage);
            console.error('Remove ugly teachers plugin: ' + e)
        }
    }

    removeTeachers()

    // Fallback for slow loading content some places
    const intervals = [200, 700, 1200]
    intervals.forEach(interval => {
        setTimeout(() => {
            removeTeachers()
        }, interval);
    })
})()
