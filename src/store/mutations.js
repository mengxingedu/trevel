export default {
    increment(states, str) {
        states.cities = str;
        try{
            if(localStorage && localStorage.setItem){
                localStorage.setItem('cities', str)
            }
        } catch (e){
            console.log(e)
        }
        
    },
    setIsShowGallary(states){
        states.isShowGallary = !states.isShowGallary;
    }
}