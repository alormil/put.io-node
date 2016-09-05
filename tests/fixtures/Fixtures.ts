import * as fs from 'fs';

export class Fixtures {

    private fixture: string;

    constructor(path: string) {
        this.fixture = JSON.parse(fs.readFileSync(`./tests/fixtures/${path}`, 'utf8'));
    }

    public get fixtureData(): string {
        return this.fixture;
    }

    public set fixtureData(fix: string) {
        this.fixture = fix;
    }
}
