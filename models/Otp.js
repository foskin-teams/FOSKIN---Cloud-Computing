
class Product {

    generateSlug(name) {
        return name.toLowerCase().replace(/\s+/g, '-');
    }

    constructor(phone_number, otpnumber, expired_date){
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
        this.isActive = isActive || 'active'
    }
}