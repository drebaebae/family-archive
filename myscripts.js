//IMG 1
let imgone_Description =["two teenage girls and two younger children standing in front of wooden shack. the girls are wearing sunday dresses with one standing shyly and the other confident. i hated wearing dresses like that.","nonamed children. i wonder who is the ancestor.","in the background lies a shack and a canoe stationed in front of a mound of wood. who knew how to sail. did they prefer water to land?"];

function alttext1(){
  document.getElementById("img_one").style.opacity="1"; 
  let randomIndex = Math.floor(Math.random()*imgone_Description.length);
  console.log(randomIndex);
  document.getElementById('span1').innerText= imgone_Description[randomIndex];
}

//IMG2

let imgtwo_Description =["black and white archival photo with white curved edges. features asian woman wearing white dress smiles and dances with a man wearing suit. mans face is turned away from camera; her face beams with a smile. they are on a dance floor with other couples. ","noname woman dancing with either my grandfather or father."];

function alttext2(){
  document.getElementById("img_two").style.opacity="1"; 
  let randomIndex = Math.floor(Math.random()*imgtwo_Description.length);
  console.log(randomIndex);
  document.getElementById('span2').innerText= imgtwo_Description[randomIndex];
}

//IMG3
let imgthree_Description =["curved square black and white archival photograph of a woman sitting on a cushioned chair. she is sitting indoors beside a balcony with the light dramatically seeping in.","My grandmother Margarita wearing a bright smile. I wonder if she had my father yet.","im told she was the only woman to work at the port floor and central market after she became orphaned as a child.  Hope she got to sit on this well deserved throne often."];

function alttext3(){
  document.getElementById("img_three").style.opacity="1"; 
  let randomIndex = Math.floor(Math.random()*imgthree_Description.length);
  console.log(randomIndex);
  document.getElementById('span3').innerText= imgthree_Description[randomIndex];
}

//IMG4
let imgfour_Description =["wrinkled black and white photo of a woman holding a baby by a door and window. nearly a silhouette, the woman looks at the baby smiling. ","my grandmother Margarita holds my father in her arms. they will grow to have a close relationship. im told we share similar features.","My grandfather Amadors image is washed out by the light, his face faintly present in the photograph and my fathers life im told."];

function alttext4(){
  document.getElementById("img_four").style.opacity="1"; 
  let randomIndex = Math.floor(Math.random()*imgfour_Description.length);
  console.log(randomIndex);
  document.getElementById('span4').innerText= imgfour_Description[randomIndex];
}

//IMG5
let imgfive_Description =["dark skin man with white shirt stand with hands on hips in front of a body of way and clear sky","grandfather amador standing before his beloved guaya river","selfie photo of grandfather amador with text on the side that says, this photo is dedicated to the woman i love most and brings me happiness."];

function alttext5(){
  document.getElementById("img_five").style.opacity="1"; 
  let randomIndex = Math.floor(Math.random()*imgfive_Description.length);
  console.log(randomIndex);
  document.getElementById('span5').innerText= imgfive_Description[randomIndex];
}

