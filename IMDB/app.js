const searchform = document.querySelector('form')
const moviecontainer = document.querySelector('.movie-container')
const inputbox= document.querySelector('.inputbox')

const getmovieinfo=async (movie)=>{
    const myAPIKey =  "7984af0e" ;
    const url =`http://www.omdbapi.com/?apikey=${myAPIKey}&t=${movie}`
    const response =await fetch(url);
    const data =await response.json();
    showMovieData(data);
}

const showMovieData = (data)=>{

    moviecontainer.innerHTML="";
    const {Title,imdbRating,Genre,Released,Runtime,Actors,Plot,Poster}=data;

    const movieElement= document.createElement('div')
    movieElement.classList.add('movie-info') 
    movieElement.innerHTML= `<h2>${Title}</h2>
                            <p><strong>Rating:&#11088;</strong>${imdbRating}</p>`

    
    const movieGenrelement = document.createElement('div');
    movieGenrelement.classList.add('movie-genre')  
    
    Genre.split(",").forEach(element => {
        const p = document.createElement('p');
        p.innerText= element;
        movieGenrelement.appendChild(p);
    });
    movieElement.appendChild(movieGenrelement);

    movieElement.innerHTML +=`<p><strong>Realesed Date</strong>${Released}</p>
    <p><strong>Duration</strong>${Runtime}</p>
    <p><strong>Actors</strong>${Actors}</p>
    <p><strong>Plot</strong>${Plot}</p>`

    const moviePosterElement = document.createElement('div')
    moviePosterElement.classList.add('moviePoster')
    moviePosterElement.innerHTML=`<img src=${Poster}"/>`

  
    moviecontainer.appendChild(moviePosterElement);

    moviecontainer.appendChild(movieElement);
}

searchform.addEventListener("submit",(e)=>{
    e.preventDefault()
    const moviename = inputbox.value.trim();
    if ( moviename !=   ''){
        getmovieinfo(moviename);
    }
    else{
        moviecontainer.innerHTML=`<h2>Enter movie name to get movie information</h2>`
    }
});



