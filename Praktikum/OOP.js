"use strict";
class Orang {
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
const mhs = new Orang();
mhs.setName('Bowo');
console.log('namanya dia adalah ' + mhs.getName());
