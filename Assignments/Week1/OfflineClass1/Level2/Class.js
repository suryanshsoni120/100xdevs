class Animal {
  // Special method for creating and initializing an object created with a class.
  // Only one constructor can be there in a class.
  constructor(name, legCount) {
    this.name = name;
    this.legCount = legCount;
  }
  // Method that will be available for every Animal object.
  describe() {
    return `${this.name} has ${this.legCount} legs`;
  }
}
