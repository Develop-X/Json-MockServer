const faker = require('faker');

function generateEmployees() {
    let employees = [];

    for (let id = 100; id < 500; id++) {
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let email = faker.internet.email();
        let company = faker.company.companyName();
        let jobTitle = faker.name.jobTitle();
        let jobType = faker.name.jobType();
        let jobArea = faker.name.jobArea();
        let jobDescription = faker.name.jobDescriptor();
        let address = faker.address.streetAddress() + "," + faker.address.city() + "," + faker.address.country();

        employees.push({
            "id": id,
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "company":company,
            "job": {
                "jobTitle": jobTitle,
                "jobType": jobType,
                "jobArea":jobArea,
                "jobDesc":jobDescription
            },
            "address": address
        });
    }
    return {
        "employees": employees
    }
}

module.exports = generateEmployees;