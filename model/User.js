class User {
    constructor(id,uuid, name, email, confirm_email, phone, confirm_phone, age, gender, skin_type, role, profile){
        this.id = id
        this.uuid = uuid
        this.name = name
        this.email = email
        this.confirm_email = confirm_email
        this.phone = phone
        this.confirm_phone = confirm_phone
        this.age = age
        this.gender = gender
        this.skin_type = skin_type
        this.role = role || 'user'
        this.profile = profile
    }
}