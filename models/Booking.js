
class Product {
    constructor(user_id, service_id, detection_slug, status, reason){
        this.user_id = user_id
        this.service_id = service_id
        this.detection_slug = detection_slug
        this.status = status
        this.reason = reason
        this.create_at = this.create_at ||new Date()
        this.update_at = new Date()
    }
}