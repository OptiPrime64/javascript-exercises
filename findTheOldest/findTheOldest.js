function findTheOldest(obj) {

    const oldest = obj.sort((a, b) => {

        if (!a.yearOfDeath) {
            a.yearOfDeath = new Date().getFullYear();
        }

        if (!b.yearOfDeath) {
            b.yearOfDeath = new Date().getFullYear();
        }

        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;

    });

    return oldest[0];

}

module.exports = findTheOldest
