function member(id, name, grade) {
    this.id = id;
    this.name = name;
    this.grade = grade;
    this.toString = function () {
        return "ID: " + this.id + ", Name: " + this.name + ", Grade: " + this.grade;
    }
}

function team() {
    this.members = new Array();
    this.add = function (member) {
        var index = this.members.length;
        this.members[index] = member;
        return index;
    }
    this.toString = function () {
        return this.members.join("\n");
    }
}

var myTeam = new team()

myTeam.add(new member('1','wassel','candidat'))
myTeam.add(new member('1','wassel','candidat'))
myTeam.add(new member('1','wassel','candidat'))
myTeam.add(new member('1','wassel','candidat'))
myTeam.add(new member('2','aymen','coach'))
console.log(myTeam.toString());