let defaultCities = '北京';
console.log(localStorage)
try{//防止用户阻止本地存储或者无痕浏览导致错误
	if(localStorage && localStorage.getItem('cities')){
		defaultCities = localStorage.getItem('cities');
		console.log(defaultCities)
	}
} catch (e){
	console.log(e)
}

export default {
	cities: defaultCities,
	isShowGallary : false
}