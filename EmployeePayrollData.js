class EmployeePayrollData {

    constructor() { }

    //Getters and setters
    get id() { return this._id; }
    set id(id) {
        this._id = id;
    }

    get name() { return this._name; }
    set name(name) {
        let nameRegEx = RegExp('^[A-Z]{1}[A-Za-z\\s]{2,}$');
        if (nameRegEx.test(name)) {
            this._name = name;
        }
        else throw "Name is incorrect";
    }

    get gender() { return this._gender; }
    set gender(gender) {
        this._gender = gender;
    }

    get profilePic() { return this._profilePic; }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get department() { return this._department; }
    set department(department) {
        this._department = department;
    }

    get salary() { return this._salary; }
    set salary(salary) {
        this._salary = salary;
    }

    get notes() { return this._notes; }
    set notes(notes) {
        this._notes = notes;
    }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
        if (startDate.toLocaleDateString <= new Date().toLocaleDateString)
            this._startDate = startDate;
        else throw "Start date is incorrect";
    }

    //Method
    toString() {
        //Options is used to format the output of date into user requirement
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "Id : " + this.id + ", Name : " + this.name + ", Profile pic : " + this.profilePic + 
            ", gender : " + this.gender + ", Department : " + this.department + ", Salary : " + this.salary
            + ", Notes : " + this.notes + ", Start Date : " + empDate;
    }
}
empPayrollData = new EmployeePayrollData();
empPayrollData.id = 1;
empPayrollData.name = 'Drew A';
empPayrollData.gender = 'Male';
empPayrollData.profilePic = '../assets/Ellipse -1.png';
empPayrollData.department = 'HR';
empPayrollData.salary = 500000.00;
empPayrollData.notes = 'This is new 1st note';
empPayrollData.startDate = new Date(2018, 11, 24);
console.log(empPayrollData.toString());
empPayrollData = new EmployeePayrollData();
empPayrollData.id = 2;
empPayrollData.name = 'Dream U';
empPayrollData.gender = 'Male';
empPayrollData.profilePic = '../assets/Ellipse -3.png';
empPayrollData.department = 'Finance';
empPayrollData.salary = 500000.00;
empPayrollData.notes = 'This is new 2nd note';
empPayrollData.startDate = new Date();
console.log(empPayrollData.toString());