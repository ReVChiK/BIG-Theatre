function Slider(){
    let score = 0;

    let lower_poster = document.querySelector('.lower-poster');

    document.querySelector('.button-left').onclick = ()=>{
        if(score == 0){
            return;
        }
        else{
            lower_poster.style.transform = 'translate(-330px, 20px)';
            lower_poster.style.display = 'block';
            score--;
        }
    }

    document.querySelector('.button-right').onclick = ()=>{
        if(score == 0){
            lower_poster.style.transform = 'none';
            lower_poster.style.display = 'none';
            score++;
        }
    }
}

Slider();