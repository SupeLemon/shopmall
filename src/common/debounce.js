export function debounce(func, deplay) {
    let timer = null;
    return function(...args) {
        if (timer) clearInterval(timer)
        timer = setTimeout(() => {
            func.apply(this, arguments)
        }, deplay)
    }
}