const promises = Promise.all(
    [
    await import ('./introduce.js'),
    await import ('./calc/js')
    ]
)
console.log(promises)