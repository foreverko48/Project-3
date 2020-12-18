jQuery(document).ready(function($){
    move();
    const getData = axios.get('http://csc225.mockable.io/consoles');
    getData.then(function(data){
       
        const consoles = data.data;
        setTimeout(() => { 
        
            const consoleInfo = consoles.map(function(information){
                
                const {id, name, image} = information;
    
                    return `
                        <div data-id="${id}" class=" media m-4 border bg-light singleCon"> 
                        <img class = "conpic" src="${image}" alt="${name}">
                        <div class="media-body">
                        <h4 class = "consoleText">${name}<h4>
                        <div class="text-center">
                        <button class = "detailButton btn btn-primary" >Detail</button>
                        </div>
                        </div>
                        </div> `;
            }).join('');
            $('#con').html(consoleInfo);}, 1500);
    })
    
    jQuery('.consoles').on('click', '.media', function(){
        move();
        const id = $(this).attr('data-id');
        const getEachCon = axios.get(`http://csc225.mockable.io/consoles/${id}`);
        getEachCon.then(function(detailData){

            const SingleConsole = detailData.data;
        setTimeout(() => { 
        
                const {country, id, image, name, price, releaseYear} = SingleConsole;
                $('#card').html(`
    
                        <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${image}" alt="${name}">
                        <div class="card-body">
                          <h5 class="card-title">${name}</h5>
                          <p class="card-text">Here is more deatil about this console</p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">Price: ${price}$</li>
                          <li class="list-group-item">Country: ${country}</li>
                          <li class="list-group-item">${releaseYear}</li>
                        </ul>
                      </div>
                        `);
            ;}, 1000);
        })
    });
});

function move() { 
    
    var element = document.getElementById("progBar");
    var element2 = document.getElementById("prog");
    element.style.display = "flex";
    element2.style.display = "flex";    
    var width = 0; 
    var identity = setInterval(scene, 10); 
    function scene() { 
      if (width >= 250) { 
        clearInterval(scene);
        element.style.width = 0;
        width = 0;  
        element.style.display = "none";
        element2.style.display = "none";
      } 
      else { 
        width++;  
        element.style.width = width + '%';  
      } 
    } 
  } 
