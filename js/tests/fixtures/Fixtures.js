"use strict";
const fs = require('fs');
class Fixtures {
    constructor(path) {
        this.fixture = JSON.parse(fs.readFileSync(`./tests/fixtures/${path}`, 'utf8'));
    }
    get fixtureData() {
        return this.fixture;
    }
    set fixtureData(fix) {
        this.fixture = fix;
    }
}
exports.Fixtures = Fixtures;
//# sourceMappingURL=Fixtures.js.map