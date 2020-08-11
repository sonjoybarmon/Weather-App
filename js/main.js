// const api = {
//     key = '7f32a01586ab6ff80c72d79ef009b22a',
//     base = 'https://api.openweathermap.org/data/2.5/',
// }
const searchForCity =  document.querySelector('.search-box');
const submitBtn = document.getElementById('submit_btn');

// when click searchBox,it becomes empty
    searchForCity.addEventListener('click',() => {
        searchForCity.value = '';
    })
//working with searchBtn
    submitBtn.addEventListener('click', () => {
        if(searchForCity.value == 0){
            alert('Please Enter Any Country Name or City Name.');
        }else{
            const cityName = searchForCity.value;
            apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=3e180048c37d3b667b4bab8de4c27e68`;
            fetch(apiLink)
            .then(res => {
                return res.json()
            })
            .then(data => displayData(data))
    
            const displayNone = document.querySelector('.txt');
                displayNone.style.display = 'none';
        }
        
    })
// creat function city date team weather sit  
    function displayData(data){
        let city = document.querySelector('.location .city');
            city.innerHTML = `${data.name}, ${data.sys.country}`;

        let now = new Date();
        let date = document.querySelector('.location .date');
            date.innerHTML = dateBuilder(now);
        
        let temp = document.querySelector('.current .temp');
            temp.innerText = `${Math.round(data.main.temp)} °c`;

        let weather_el = document.querySelector('.current .weather');
        weather_el.innerText = data.weather[0].main;


        let hilow = document.querySelector('.current .hi-low');
        hilow.innerText = `${data.main.temp_min}°c / ${data.main.temp_max}°c`;

    }
// working to set time 
    function dateBuilder(time) {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
        let day = days[time.getDay()];
        let date = time.getDate();
        let month = months[time.getMonth()];
        let year = time.getFullYear();
    
        return `${day} ${date} ${month} ${year}`;
    }