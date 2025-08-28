class University{
    constructor(name){
        this.name = name
        this.departments = []
    }

    createOne(department){
        this.departments.push(department)
    }
    createMany(deps){
        this.departments.push(...deps)
    }
    findAll(){
        return this.departments
    }
    findOne(department){
    return this.departments.find(dep => dep === department) || null
    }
    updateOne(oldDep,newDep){
        let index = this.departments.indexOf(oldDep)
        if(index !== - 1){
            this.departments[index] = newDep
        }
    }
     updateMany(oldDeps, newDeps) {
    oldDeps.forEach((oldDep, i) => {
      let index = this.departments.indexOf(oldDep);     //Shu qatorni chunmadim lekn ustoz qoganini ozim yozdim iloji boricha 
      if (index !== -1) {
        this.departments[index] = newDeps[i];
      }
    });
  }
    deleteOne(department){
        this.departments = this.departments.filter(dep => dep !== department)
    }
    deleteMany(deps){
        this.departments = this.departments.filter(dep => !deps.includes(dep));
    }
    showDepartments(){
        console.log(`${this.name} universitetidagi bolimlar:`);
    this.departments.forEach((dep, index) => {
      console.log(`${index + 1}. ${dep}`);
    });
    }

}

let uni = new University("Universitys")
uni.createOne("Harvard")
uni.createOne("Cambridge")
uni.createMany(["International", "Jahon tillari", "Math"])

console.log("All bolimlar", uni.findAll())
console.log("Topilgan:", uni.findOne("Cambridge"))

uni.updateMany(["International", "Harvard"],["Halqaro" , "Garvard"])

uni.deleteOne("Jahon tillari")
uni.deleteMany(["Cambridge", "Matematika"])

uni.showDepartments()