function changeBackground(imageURL) {
	document.body.style.backgroundImage = "url('" + imageURL + "')";
}

/*let dataURL = 'https://api.nasa.gov/planetary/apod?api_key=M0sGzKSrIj8KPTPjm8sdaXFBn2yQTZkqqB5jQwey';

function getPicture(){
	fetch(dataURL)
	.then((resp) =>{
		 return resp.json();// zamiana JS na JSON-a
	})

	.then((data) => {
    	changeBackground(data.hdurl);
    });
}

 getPicture();*/


 let urlMars = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=M0sGzKSrIj8KPTPjm8sdaXFBn2yQTZkqqB5jQwey";

 function getMarsPicture(){
 	fetch(urlMars)
    	.then((resp) => {
        return resp.json();
    })
    .then((data) => {
       let pictureList = data.photos;
       createGallery(pictureList);
    });
}

let gallery = document.getElementById('content');

function createGallery(dataList){
	for( var i = 0; i <= 8; i++){
		let img = document.createElement('img'); // tworzę znacznik <img>
		let imgPath = dataList[i].img_src;
		img.src = imgPath;
		gallery.appendChild(img); //dopisuje img jako dziecko gallery
	}
}

getMarsPicture();