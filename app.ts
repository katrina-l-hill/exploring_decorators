function SimpleLogger(constructor: Function):void {
    // Add your code here
    console.log("Class is instantiated");
  }
  
  function ReadOnly(func : Function, context: any):void {
    console.log(func);
    console.log(context);
  }
  
  function LogMethod(func : Function, context: any): void {
    console.log(context.name);
  }
  
  // Add your code throughout the following class
  @SimpleLogger
  class MyTestClass {
  property1: any;
  property2: any;
  
  constructor(property1: string, property2: number) {
  this.property1 = property1;
  this.property2 = property2;
  }
  
  @ReadOnly
  get prop1() {
    const proto = Object.getPrototypeOf(this);
  return this.property1;
  }
  
  get prop2() {
  return this.property2;
  }
  
  @LogMethod
  method1(): void {
  }
  
  method2(): void {
  }
}
  
  const myInstance = new MyTestClass('propertyValue', 123);
  myInstance.method1();
  myInstance.method2();
  
  export { MyTestClass }