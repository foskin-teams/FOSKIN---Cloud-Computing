
class Product {

    generateSlug(name) {
        return name.toLowerCase().replace(/\s+/g, '-');
    }

    constructor(id, uuid, category, brand, name, description, ingridients, price, discountPrice, rating, claims, isActive){
        this.id = id
        this.uuid = uuid
        this.name = name
        this.category = category
        this.brand = brand
        this.slug = this.generateSlug(name)
        this.description = description
        this.ingridients = ingridients
        this.price = price
        this.discountPrice = discountPrice || 0
        this.rating = rating
        this.claims = claims
        this.isActive = isActive || 1
    }
}