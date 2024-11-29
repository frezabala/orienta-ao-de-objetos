class Employee
{
    protected name: string = ''
    protected salary: number = 0
    protected payments: Array<string> = []
    protected maintenanceHist: Array<Equipment> = []

    public calculateSalary(): number {
        return this.salary;
    }

    public getName(): string {
        return this.name;
    }

    public setName(newName: string): void {
        this.name = newName;
    }

    public getSalary(): number {
        return this.salary;
    }

    public setSalary(newValue: number): void {
        this.salary = newValue;
    }

    public toListPayment(payment: string): void {
        this.payments.push(payment)
    }

    public toMaintenanceHist(equipment: Equipment): void {
        this.maintenanceHist.push(equipment)
    }

    public editMaintenance(equipment: Equipment) {

        this.maintenanceHist.forEach((element, i) => {
            if(element.getId() === equipment.getId()) {
                this.maintenanceHist.splice(i, 1)
                element.setStatus(Status.available)
            } 
        });
    }
}

class SalariedEmployee extends Employee
{
    private valueHour:number = 0
    private extraHours: number = 0

    public calculateSalary(): number {
        if(this.extraHours > 0) {
            let extraSalary: number = this.valueHour * this.extraHours;
            return this.salary + extraSalary;
        } else {
            return this.salary;
        }
    }
    
    public setExtraHours(workedHours: number, priceHours: number): void {
        this.valueHour = priceHours
        this.extraHours = workedHours
    }
}

class CommissionedEmployee extends Employee
{
    private valueComission: number = 0

    public calculateSalary(): number {
        return this.salary + this.valueComission;
    }

    public setComission(value: number): void {
        this.valueComission = value
    }
}

class HourlyEmployee extends Employee
{
    private salaryPerHour: number = 0
    private workedHours: number = 0

    public calculateSalary(): number {
        return this.salaryPerHour*this.workedHours;
    }

    public setSalaryByHour(workedHours: number, priceHours: number): void {
        this.salaryPerHour = priceHours
        this.workedHours = workedHours
    }
}

enum Status{
    occupied ,
    maintenance,
    available
}

class Equipment
{
    private id: number = 0
    private type: string = ''
    private description: string = ''
    private status: Status|null = null

    public constructor(id: number, type: string, description: string, status: Status) {
        this.type = type;
        this.id = id
        this.description = description;
        this.status = status
    }

    public getId(): number {
        return this.id;
    }

    public getType(): string {
        return this.type;
    }

    public getDescription(): string {
        return this.description;
    }

    public setStatus(status: Status): void {
        this.status = status
    }
}

class Payment 
{
    private enterprise: string = ''

    public setNameEnterprise(newName: string): void {
        this.enterprise = newName
    }

    public getName(): string {
        return this.enterprise;
    }

    public paymentEmployees(employee: CommissionedEmployee|HourlyEmployee|SalariedEmployee): void {
        let salary = employee.calculateSalary()
        let payment: string = `The value of ${salary} was paid to ${employee.getName()} by enterprise ${this.enterprise}`
        console.log(payment)
        employee.toListPayment(payment);
    }
}

class Maintenance
{
    private equipment: Equipment;
    private employee: Employee;
        
    public constructor(equipment: Equipment, employee: Employee) {
        this.equipment = equipment;
        this.employee = employee;

        equipment.setStatus(Status.maintenance)
    }

    public maintenanceEquip(): string {
        this.employee.toMaintenanceHist(this.equipment)
        let maintenance: string = `The equipment of type ${this.equipment.getType()} has been added to employee ${this.employee.getName()}`
        return maintenance
    }
}

class Enterprise
{
    private employeesList: Array<Employee> = []
    private equipmentList: Array<Equipment> = []

    public toEmployeesList(employee: Employee): void {
        this.employeesList.push(employee)
    }

    public toEquipmentList(equipment: Equipment): void {
        this.equipmentList.push(equipment)
    }

    public getEmployees(): void {
        for(let employee of this.employeesList) {
            console.log(employee)
        }
    }

    public getEquipment(): void {
        for(let equipment of this.equipmentList) {
            console.log(equipment)
        }
    }
}

let employee1 = new SalariedEmployee()
employee1.setName('jorge')
employee1.setSalary(1600)
employee1.setExtraHours(10, 110)
console.log(employee1.calculateSalary())

let employee2 = new CommissionedEmployee()
employee2.setName('allana')
employee2.setSalary(1700)
employee2.setComission(800)
console.log(employee2.calculateSalary())

let employee3 = new HourlyEmployee()
employee3.setName('eduardo')
employee3.setSalaryByHour(170, 35)
console.log(employee3.calculateSalary())

let payment = new Payment()
payment.setNameEnterprise('gustavo')
payment.paymentEmployees(employee2)

let equipment = new Equipment(4724, 'Drill', 'Extremely useful for precise holes', Status.available)

let maintenance = new Maintenance(equipment, employee2)
maintenance.maintenanceEquip()

employee2.editMaintenance(equipment)
console.log(employee2)