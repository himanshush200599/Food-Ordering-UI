const result = [
  {
    title:"Kalaam Restraunt",
    description:"Lorem ipsum dolor, sit amet contesectetur adipisicing elit. Ipsam ab omnis illo inventore earum explicabo cupiditate impedit quaerat laudantium ipsa doloremque quae iure laborum assumenda quia, dolore mollitia vitae iusto.",
    image_link:"https://media.istockphoto.com/photos/interior-of-cozy-restaurant-loft-style-picture-id843610508?k=6&m=843610508&s=612x612&w=0&h=41DLQdNj3YtjIbSUQtX2zEvdJHAdHAq5c1MVS37VNzo=",
    rating:"5"
  },
  {
    title:"Crazy About Pizza",
    description:"Lorem ipsum dolor, sit amet contesectetur adipisicing elit. Ipsam ab omnis illo inventore earum explicabo cupiditate impedit quaerat laudantium ipsa doloremque quae iure laborum assumenda quia, dolore mollitia vitae iusto.",
    image_link:"https://media.istockphoto.com/photos/interior-of-cozy-restaurant-loft-style-picture-id843610508?k=6&m=843610508&s=612x612&w=0&h=41DLQdNj3YtjIbSUQtX2zEvdJHAdHAq5c1MVS37VNzo=",
    rating:"4"
  },
  {
    title:"Highway Kitechen",
    description:"Lorem ipsum dolor, sit amet contesectetur adipisicing elit. Ipsam ab omnis illo inventore earum explicabo cupiditate impedit quaerat laudantium ipsa doloremque quae iure laborum assumenda quia, dolore mollitia vitae iusto.",
    image_link:"https://media.istockphoto.com/photos/interior-of-cozy-restaurant-loft-style-picture-id843610508?k=6&m=843610508&s=612x612&w=0&h=41DLQdNj3YtjIbSUQtX2zEvdJHAdHAq5c1MVS37VNzo=",
    rating:"4.5"
  },
  {
    title:"Big Bite",
    description:"Lorem ipsum dolor, sit amet contesectetur adipisicing elit. Ipsam ab omnis illo inventore earum explicabo cupiditate impedit quaerat laudantium ipsa doloremque quae iure laborum assumenda quia, dolore mollitia vitae iusto.",
    image_link:"https://media.istockphoto.com/photos/interior-of-cozy-restaurant-loft-style-picture-id843610508?k=6&m=843610508&s=612x612&w=0&h=41DLQdNj3YtjIbSUQtX2zEvdJHAdHAq5c1MVS37VNzo=",
    rating:"5"
  },
  {
    title:"XCF Restra",
    description:"Lorem ipsum dolor, sit amet contesectetur adipisicing elit. Ipsam ab omnis illo inventore earum explicabo cupiditate impedit quaerat laudantium ipsa doloremque quae iure laborum assumenda quia, dolore mollitia vitae iusto.",
    image_link:"https://media.istockphoto.com/photos/interior-of-cozy-restaurant-loft-style-picture-id843610508?k=6&m=843610508&s=612x612&w=0&h=41DLQdNj3YtjIbSUQtX2zEvdJHAdHAq5c1MVS37VNzo=",
    rating:"3.5"
  },
  {
    title:"Biaknerwala",
    description:"Lorem ipsum dolor, sit amet contesectetur adipisicing elit. Ipsam ab omnis illo inventore earum explicabo cupiditate impedit quaerat laudantium ipsa doloremque quae iure laborum assumenda quia, dolore mollitia vitae iusto.",
    image_link:"https://media.istockphoto.com/photos/interior-of-cozy-restaurant-loft-style-picture-id843610508?k=6&m=843610508&s=612x612&w=0&h=41DLQdNj3YtjIbSUQtX2zEvdJHAdHAq5c1MVS37VNzo=",
    rating:"4"
  },
  {
    title:"Kung fu panda",
    description:"Lorem ipsum dolor, sit amet contesectetur adipisicing elit. Ipsam ab omnis illo inventore earum explicabo cupiditate impedit quaerat laudantium ipsa doloremque quae iure laborum assumenda quia, dolore mollitia vitae iusto.",
    image_link:"https://media.istockphoto.com/photos/interior-of-cozy-restaurant-loft-style-picture-id843610508?k=6&m=843610508&s=612x612&w=0&h=41DLQdNj3YtjIbSUQtX2zEvdJHAdHAq5c1MVS37VNzo=",
    rating:"4"
  } , {
    title:"Big Lite",
    description:"Lorem ipsum dolor, sit amet contesectetur adipisicing elit. Ipsam ab omnis illo inventore earum explicabo cupiditate impedit quaerat laudantium ipsa doloremque quae iure laborum assumenda quia, dolore mollitia vitae iusto.",
    image_link:"https://media.istockphoto.com/photos/interior-of-cozy-restaurant-loft-style-picture-id843610508?k=6&m=843610508&s=612x612&w=0&h=41DLQdNj3YtjIbSUQtX2zEvdJHAdHAq5c1MVS37VNzo=",
    rating:"1"
  },
    {
    title:"Mayank Dhaba",
    description:"Lorem ipsum dolor, sit amet contesectetur adipisicing elit. Ipsam ab omnis illo inventore earum explicabo cupiditate impedit quaerat laudantium ipsa doloremque quae iure laborum assumenda quia, dolore mollitia vitae iusto.",
    image_link:"https://media.istockphoto.com/photos/interior-of-cozy-restaurant-loft-style-picture-id843610508?k=6&m=843610508&s=612x612&w=0&h=41DLQdNj3YtjIbSUQtX2zEvdJHAdHAq5c1MVS37VNzo=",
    rating:"5"
  } , {
    title:"AAAA Resort",
    description:"Lorem ipsum dolor, sit amet contesectetur adipisicing elit. Ipsam ab omnis illo inventore earum explicabo cupiditate impedit quaerat laudantium ipsa doloremque quae iure laborum assumenda quia, dolore mollitia vitae iusto.",
    image_link:"https://media.istockphoto.com/photos/interior-of-cozy-restaurant-loft-style-picture-id843610508?k=6&m=843610508&s=612x612&w=0&h=41DLQdNj3YtjIbSUQtX2zEvdJHAdHAq5c1MVS37VNzo=",
    rating:"4.9"
  },
]

const container = document.querySelector(".container");
const searchbar = document.getElementById("searchbar");
const filterS = document.getElementById("filterS");
searchbar.addEventListener("keyup",(e)=>{
  const tempRes = result.filter((item)=>item.title.toLowerCase().includes(e.target.value.toLowerCase()));
  init(tempRes);
});
filterS.addEventListener("change",(e)=>{
  let temp = [...result];
  if(e.target.value==="SortByRating"){ 
    temp.sort((a,b) => Number(a.rating) > Number(b.rating) ? -1 : 1);
      init(temp);
  }
  else if(e.target.value==="SortByTitle"){
    temp.sort((a,b)=>a.title>b.title?1:-1);
      init(temp);
  }
    else if(e.target.value==="default"){
    init(result);
  }

});
window.onload = function(){
  init(result);
}
function init(res){
  let text = '';
  res.forEach((item)=>{ 
    text+=display(item);
  })
  
  container.innerHTML = text;
}
function display(item){
  let html = `<div class="card">
    <div class="card_image">
      <img src=${item.image_link} alt="" class="image">
    </div>
    <div class="card_title">
      <h3 class="title">${item.title}</h3>
    </div>
    <div class="card_body">
      <div class="card_description">
        <p class="desc">${item.description}</p>
      </div>
      <div class="footer">
        <span class="ratings">
          ${item.rating} Star
        </span>
        <span class="button">
          <a href="#" class="view_more">
            View More
          </a>
        </span>
      </div>
    </div>
  </div>`;
  return html;
}
