const ol  = document.createElement('ol');
ol.classList.add('carousel-indicators');

const slide1 = document.createElement('div');
slide1.classList.add('carousel-inner');

const container = document.getElementById('customer-carousel');

var request = new XMLHttpRequest();
request.open('GET', 'https://newsapi.org/v2/everything?q=ipl2019&apikey=989f648606fc48ccb7a5d02313f85310', true);
request.onload = function () {

  var data = JSON.parse(this.response);

  var count= data.articles.length;
  

  if (request.status >= 200 && request.status < 400) {
	  var j=0;
    data.articles.forEach(news => {
		const div = document.createElement('div');
			if(j==0)
			{	
			div.id=j;
			div.classList.add('carousel-item');
			div.classList.add('active');
			div.classList.add('text-center');
			}
			else
			{
			div.id=j;
			div.classList.add('carousel-item');
			div.classList.add('text-center');
			}
			
			
			const img = document.createElement('img');
			img.classList.add('img-fluid'); 
			img.classList.add('rounded-circle');
			img.classList.add('m-5');
			img.width="150";
			img.src=news.urlToImage;
			
			
			
			const quote = document.createElement('blockquote');
			quote.classList.add('blockquote');
			quote.classList.add('text-black');
			
			const p = document.createElement('h4');
			p.classList.add('mb-5'); 
			p.classList.add('testimonials');
			p.style.color = 'black';
			p.textContent =news.title;
			 
			 const p1 = document.createElement('p');
			p1.classList.add('mb-5');
			p1.textContent = news.description;
			
			const a1 = document.createElement('a');
			a1.setAttribute('href',news.url);
			a1.innerHTML="ReadMore";
			a1.setAttribute('target', '_blank');
			
			const br = document.createElement('br'); 
			 quote.appendChild(p);
			 quote.appendChild(p1);
			 quote.appendChild(a1);
			 
			 div.appendChild(img);
			 div.appendChild(quote);
			 div.appendChild(br);
			 div.appendChild(br);
			 
			 slide1.appendChild(div);
			 j=j+1;
    });

	container.appendChild(slide1);
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();