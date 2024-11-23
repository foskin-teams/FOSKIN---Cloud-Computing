class User {
    constructor(name, email, confirm_email, phone, confirm_phone, age, gender, skin_type, role, profile_image, settings, hasStore){
        const bucketName = process.env.BUCKET_NAME || 'foskin-storage'
        this.name = name || null
        this.email = email | null
        this.confirm_email = confirm_email || 0
        this.phone = phone
        this.confirm_phone = confirm_phone || 1
        this.age = age || 0
        this.gender = gender || 'male'
        this.skin_type = skin_type || 'normal'
        this.role = role || 'user'
        this.profile_image = profile_image || `storage.googleapis.com/${bucketName}/images/default_profile.jpg`
        this.settings = settings
        this.hasStore = hasStore
        this.create_at = this.create_at ||new Date()
        this.update_at = new Date()
    }
}