import Fingerprint2 from '../node_modules/fingerprintjs2'

Fingerprint2.get(function (components) {
    console.log(components) // an array of components: {key: ..., value: ...}
    var values = components.map(function (component) { return component.value })
    var murmur = Fingerprint2.x64hash128(values.join(''), 31)
    console.log(murmur);
});