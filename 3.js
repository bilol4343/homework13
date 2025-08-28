class University{
    constructor(name){
        this.name = name
        this.departments = []
    }
    addDepartment(department){
        this.departments.push(department)
    }
    removeDepatment(department){
        this.departments = this.departments.filter(dep => dep !== department)
    }
    showDepartments() {
    console.log(`${this.name} universitetidagi bolimlar:`);
    this.departments.forEach((dep, index) => {
      console.log(`${index + 1}. ${dep}`);
    });
  }

}

let uni = new University("Universitys")
uni.addDepartment("Harvard")
uni.addDepartment("Cambridge")
uni.addDepartment("International")
uni.addDepartment("Jahon tillari")
uni.addDepartment("Math")


uni.removeDepatment("Jahon tillari")
uni.removeDepatment("Math")

uni.showDepartments()