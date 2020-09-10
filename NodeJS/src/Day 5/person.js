class Person {

    constructor() {
        console.log('I am constructor');
    }

    getPersonName() {
        return 'Mumbai';
    }

    getPersonAddress() {
        return "i am don!!!!";
    }

    getPersonDetail() {
        const name = this.getPersonName();
        const address = this.getPersonAddress();
        return name + " " + address;
    }

    static main() {
        let p = new Person();
        const detail = p.getPersonDetail();
        console.log(detail);
    }


}

Person.main();