class Client 
{
    protected name: string  = ''
    protected cnpj: string = ''
    protected adress: string = ''
    protected invoiceList: Array<Invoice> = []

    public setName(newName: string) {
        this.name = newName
    }

    public getName(): void{
        console.log(this.name)
    }

    public setCnpj(newCnpj: string): void {
        this.cnpj = newCnpj
    }

    public getCnpj(): void {
        console.log(this.cnpj)
    }

    public pushInvoice(invoice: Invoice): void {
        this.invoiceList.push(invoice)
    }

    public getInvoiceList():Array<Invoice> {
        return this.invoiceList;
    }
}

class Card 
{
    public constructor(
        private flag: string, 
        private cardNumber: string, 
        private expiration: Date, 
        private cvv: string) {

    }
}

class ContractorClient extends Client
{
    private registeredCard: Card|null = null
    private discount: number = 5
}

class SporadicClient extends Client
{
    
}

enum TypeLoad {
    Dry,
    Refrigerated,
    Dangerous
}

enum Status {
    Available,
    Ocuppied,
    Maintenance
}

class Load
{
    private type: TypeLoad|null = null
    private weight: number = 0
    private bulk: number = 0

    public registerLoad(type: TypeLoad, weight: number, bulk: number) {
        this.type = type
        this.weight = weight
        this.bulk = bulk
    }
}

class Vehicle 
{
    private load: Load|null = null
    private status: Status|null = null
    private plate: string = ''
    private model: string = ''

    public setVehicle(load: Load, status: Status, plate: string, model: string) {
        this.load = load;
        this.status = status;
        this.plate = plate
        this.model = model
    }
}

class Driver 
{
    private name: string = ''
    private cnh: string = ''
    private vehicle: Vehicle|null = null

    getName(): string {
        return this.name;
    }

    setName(newName: string): void {
        this.name = newName
    }

    setCnh(newCnh: string): void {
        this.cnh = newCnh
    }

    getCnh (): string {
        return this.cnh;
    }

    setVehicle(vehicle: Vehicle): void {
        this.vehicle = vehicle
    }
}

class Route
{
    private vehiclesList: Array<Vehicle> = []
    private origin: string = ''
    private destiny: string = ''
    private distanceKm: number = 0
    private estimatedTime: Date = new Date()

    public constructor(origin: string, destiny: string, distanceKm: number) {
        this.origin = origin
        this.destiny = destiny
        this.distanceKm = distanceKm
    }

    public insertList(vehicle: Vehicle): void {
        this.vehiclesList.push(vehicle)
    }

    public getVehicles(i?: number) {
        if(i == undefined) {
            console.log(this.vehiclesList)
        } else {
            console.log(this.vehiclesList[i])
        }
    }
}

enum DeliveryStatus{
    pending,
    delivered,
    progress
}

class Delivery
{
    constructor(
        private date: Date, 
        private client: Client, 
        private load: Load,
        private vehicle: Vehicle, 
        private driver: Driver, 
        private deliveryStatus: DeliveryStatus
    ) {
    }
}

class Invoice //nota fical
{
    issueDate: Date|null = new Date()
    listInvoices: Array<Invoice> = []

    public constructor(
        private saleNumber: number,
        private client: Client,
        private totalValue: number,
        private payment: Card
    ) {

    }
}

class Order
{
    private client: Client
    private load: Load

    constructor(client: Client, load: Load) {
        this.client = client,
        this.load = load
     }

    makeDelivery(vehicle: Vehicle, driver: Driver, deliveryStatus: DeliveryStatus): Delivery {
        console.log('Request was done!')
        return new Delivery(new Date(), this.client, this.load, vehicle, driver, deliveryStatus)
    }

    public sendInvoice(saleNumber: number,totalValue: number, payment: Card): Invoice {
        let invoice: Invoice = new Invoice(saleNumber, this.client, totalValue, payment)
        return invoice
    }

    public toListInvoice(invoiceList: Invoice, invoice: Invoice) {
        invoiceList.listInvoices.push(invoice)
    }

}

let client: Client = new Client()

let load: Load = new Load()
load.registerLoad(TypeLoad.Dangerous, 4000, 3000)

let vehicle: Vehicle = new Vehicle()
vehicle.setVehicle(load, Status.Available, 'ABC-1234', 'VW Gol')

let vehicle2: Vehicle = new Vehicle()
vehicle2.setVehicle(load, Status.Maintenance, 'ABC-1523', 'Fiat Uno') 

let driver: Driver = new Driver()
driver.setName('Jorge garcias')
driver.setCnh('1122355933')
driver.setVehicle(vehicle2)

let bradesco: Card = new Card('Bradesco', '1171 6622 8983 44', new Date('2010-05-20'), '258')

let route = new Route('Brasil', 'Paraguai', 755)
route.insertList(vehicle)
route.insertList(vehicle2)
route.getVehicles()


client.setName('marco')
client.getName()
client.setCnpj('00101101101001')
client.getCnpj()

let order: Order = new Order(client, load)
console.log(order.makeDelivery(vehicle2, driver, DeliveryStatus.progress))
let invoice = order.sendInvoice(3213, 3200, bradesco)
client.pushInvoice(invoice)

console.log(client.getInvoiceList())