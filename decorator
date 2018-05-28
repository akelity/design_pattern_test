'use strict';

class abstractComponent {
  constructor() {

  }

  tick() {

  }
}


class concreteComponent extends abstractComponent {
  constructor() {
    super();
  }

  tick (){
    console.log('Tick, default!');
  }
}



class Decorator extends abstractComponent {
  constructor(component) {
    super();
    this.component = component
  }

  tick (){
    this.component.tick()
  }
}

class concreteDecoratorA extends Decorator {
  constructor(component, sign) {
    super(component);
    this.addedState = sign;
  }

  tick (){
    super.tick();
    console.log(this.addedState);
  }
}



function initDecorator() {
  let component = new concreteComponent();
  let decoratorA = new concreteDecoratorA(component, 'Tick, advanced!');

  console.log("###### BASIC COMPONENT ######");
  component.tick();
  console.log("###### EXTENDED COMPONENT ######");
  decoratorA.tick();

}

initDecorator();
