let defaultCities = '北京';
try{//防止用户阻止本地存储或者无痕浏览导致错误
	if(localStorage && localStorage.getItem){
		defaultCities = localStorage.getItem('cities');
	}
} catch (e){
	console.log(e)
}

export default {
	cities: defaultCities,
	testHeHe : '我是getters：'
}