
class Singleton {
  constructor() {
    if (Singleton.hasOwnProperty('singleton')) return Singleton.singleton;

    Object.defineProperty(Singleton, 'singleton', {value: this, enumerable:false, writable:false, configurable:true});
    this.name = "Mich";
  }

  changeName(newName) {
    this.name = newName;
  }
}

const instance1 = new Singleton;
instance1.changeName("Loris");

const instance2 = new Singleton;
console.log(instance2.name); //Loris
