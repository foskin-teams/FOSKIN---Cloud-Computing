
class Product {

    generateSlug(name) {
        return name.toLowerCase().replace(/\s+/g, '-');
    }

    constructor(name){
        this.name = name
        this.slug = this.generateSlug(name)
        this.create_at = this.create_at ||new Date()
        this.update_at = new Date()
    }
}