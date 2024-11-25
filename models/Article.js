
class Product {

    generateSlug(title) {
        return title.toLowerCase().replace(/\s+/g, '-');
    }

    constructor(title, author_name, thumbnail, content, category, isActive, isDelete){
        this.title = title
        this.slug = this.generateSlug(title)
        this.author_name = author_name
        this.thumbnail = thumbnail
        this.content = content
        this.category = category
        this.isActive = isActive || 1
        this.isDelete = isDelete || 0
        this.create_at = this.create_at ||new Date()
        this.update_at = new Date()
    }
}