function ProfileInfo() {
    this.setUserName = function(userName) {
        this._userName = userName;
    }
    this.getUserName = function() {
        return this._userName;
    }
    this.setEmail = function(email) {
        this._email = email;
    }
    this.getEamil = function() {
        return this._email;
    }
    this.setAddress = function(address) {
        this._address = address;
    }
    this.getAddress = function() {
        return this._address;
    }
}

function User() {
    this.setName = function(name) {
        this._name = name;
    }
    this.getName = function() {
        return this._name;
    }
    this.setAge = function(age) {
        this._age = age;
    }
    this.getAge = function() {
        return this._age;
    }
    this.setProfileInfo = function(profileInfo) {
        this._profileInfo = profileInfo;
    }
    this.getProfileInfo = function() {
        return this._profileInfo;
    }
}