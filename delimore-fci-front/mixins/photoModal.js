export default {
    data(){
        return{
            toggledPhoto: null
        }
    },
    methods:{
        findPhotoIndex(currPhoto){
            return this.photos.findIndex((photo) => photo.url === currPhoto.url)
        },
        toggleModal(photo){
            this.toggledPhoto = photo
        },
        prevPhoto(photo){
            this.toggledPhoto = this.photos[this.findPhotoIndex(photo) - 1]
        },
        nextPhoto(photo){
            this.toggledPhoto = this.photos[this.findPhotoIndex(photo) + 1]
        },
        closeModal(){
            this.toggledPhoto = null
        },
        
    }
}