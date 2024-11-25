
class Product {

    generateSlug(name) {
        return name.toLowerCase().replace(/\s+/g, '-');
    }

    constructor(user_id, title, description, read_status){
        this.user_id = user_id
        this.uuid = title
        this.name = description
        this.category = read_status || 0
        this.create_at = this.create_at ||new Date()
        this.update_at = new Date()
    }
}