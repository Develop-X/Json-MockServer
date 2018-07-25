const casual = require('casual');

function generateCasualCustomers() {
    let users = [];

    for (let i = 101; i < 200; i++) {
        let name = casual._full_name();
        let username = casual._username();
        let address = casual._address();
        let city = casual._city();
        let state = casual._state();
        let country = casual._country();
        let buildingNo = casual._building_number();
        let phoneNo = casual._phone();
        let email = casual._email();
        let card = casual._card_data();
        let companyName = casual._company_name();
        let latitude = casual._latitude();
        let longitude = casual._longitude();
        let shortDesc = casual._short_description();

        users.push({
            "id": i,
            "name": name,
            "username": username,
            "resiAddress": {
                "buildingNo": buildingNo,
                "streetAddress": address,
                "city": city,
                "state": state,
                "country": country,
            },
            "place": {
                "geologial": {
                    "latitude": latitude,
                    "langitude": longitude
                }
            },
            "phoneNo": phoneNo,
            "email": email,
            "card": card,
            "companyName": companyName,
            "shortDesc": shortDesc
        });
    }
    return {
        "users": users
    }
}

module.exports = generateCasualCustomers;
