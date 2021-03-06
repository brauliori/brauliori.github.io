var size = 4;
var sizeMobile = 12;
var App = {
    channels: {
        "cima": {
            "nombre": "Galeria CIMA (Plaza Italia) 📺",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://www.youtube.com/embed/live_stream?channel=UC4GOcOKkEefz5NamN4WyMFg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "veinticuatro-play": {
            "nombre": "24 Horas Play 📺",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://www.youtube.com/embed/live_stream?channel=UCTXNz3gjAypWp3EhlIATEJQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "meganoticias": {
            "nombre": "Meganoticias 📺",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://www.youtube.com/embed/live_stream?channel=UCkccyEbqhhM3uKOI6Shm-4Q&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "t13-movil": {
            "nombre": "T13 MOVIL 📺",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://www.youtube.com/embed/live_stream?channel=UCsRnhjcUCR78Q3Ud6OXCTNg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "left-voice":{
            "nombre": "Left Voice (Plaza Italia 2) 📺",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://www.youtube.com/embed/nNiVnY2VWCA?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "cnn-cl": {
            "nombre": "CNN Chile 📺",
            "code":"<div class='embed-responsive embed-responsive-16by9'><iframe src='https://www.youtube.com/embed/live_stream?channel=UCpOAcjJNAp0Y0fhznRrXIJQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "tv-senado": {
            "nombre": "TV Senado 📺",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://janus-tv.senado.cl/embed.php' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "cooperativa": {
            "nombre": "Cooperativa 📻",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://rudo.video/live/coopetv?volume=0&mute=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "bbtv": {
            "nombre": "Biobio TV 📻",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://rudo.video/live/bbtv?volume=0&mute=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "adn": {
            "nombre": "ADN 📻",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://rudo.video/live/adntv?volume=0&mute=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "duna": {
            "nombre": "Duna 📻",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://rudo.video/live/dunatv?volume=0&mute=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "infinita": {
            "nombre": "Infinita 📻",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://rudo.video/live/infinitatv?volume=0&mute=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "universo": {
            "nombre": "Universo 📻",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://rudo.video/live/universotv?volume=0&mute=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "radio-ae": {
            "nombre": "AE (DUOC) 📻",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://live.grupoz.cl/3991add90400a25a1580f290246f90eb?volume=0&mute=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "canal-9": {
            "nombre": "Canal 9 (Conce)📺",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://rudo.video/live/c9?volume=0&mute=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "tvu": {
            "nombre": "TVU (Conce)📺",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://rudo.video/live/tvu?volume=0&mute=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "canal-21": {
            "nombre": "Canal 21 (Chillán)📺",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://live.grupoz.cl/8b383d0a9cef5560a1bfbbeaf6ad4a38?volume=0&mute=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "ucv": {
            "nombre": "UCV TV📺",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://rudo.video/live/ucvtv2?volume=0&mute=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "uatv": {
            "nombre": "UATV📺",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://rudo.video/live/uatv?volume=0&mute=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "vtv": {
            "nombre": "VTV📺",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://rudo.video/live/vtv?volume=0&mute=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "canal-33": {
            "nombre": "Canal 33 (Temuco)📺",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://streaminghd.cl/player.video/index.php?s=eduardo555/eduardo555' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "tn": {
            "nombre": "Todonoticias 🌍",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://www.youtube.com/embed/live_stream?channel=UCj6PcyLvpnIRT_2W_mwa9Aw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "dw": {
            "nombre": "DW Español 🌍",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://www.youtube.com/embed/live_stream?channel=UCT4Jg8h03dD0iN3Pb5L0PMA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "cronica-tv": {
            "nombre": "Crónica TV 🌍",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://www.youtube.com/embed/live_stream?channel=UCT7KFGv6s2a-rh2Jq8ZdM1g&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
         "RT-español": {
            "nombre": "RT Español 🌍",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://www.youtube.com/embed/mOcEqTR1Hn4?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
         "Global-news": {
            "nombre": "Global News 🌍",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://www.youtube.com/embed/live_stream?channel=UChLtXXpo4Ge1ReTEboVvTDg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "RT-News": {
            "nombre": "RT News 🌍",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://www.youtube.com/embed/NvCSr7qzAAM?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "MILENIO": {
            "nombre": "MILENIO 🌍",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://www.youtube.com/embed/live_stream?channel=UCFxHplbcoJK9m70c4VyTIxg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "abc-news": {
            "nombre": "ABC News 🌍",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://www.youtube.com/embed/live_stream?channel=UCBi2mrWuNuyYy4gbM6fU18Q&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "sky-news": {
            "nombre": "Sky News 🌍",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://www.youtube.com/embed/live_stream?channel=UCoMdktPbSTixAyNGwb-UYkQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "chilledCow": {
            "nombre": "ChilledCow 🎵",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://www.youtube.com/embed/hHW1oY26kxQ?autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        },
        "cam-dipu-13-yutu": {
            "nombre": "Cámara Diputados Señal Youtube",
            "code": "<div class='embed-responsive embed-responsive-16by9'><iframe src='https://www.youtube.com/embed/live_stream?channel=UC33MG3YdoQ16a8a3wODh6lw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        }
    },
    add: function(canal){
        if( App.channels[canal] ){
            var thisCanal = document.createElement("div");
            thisCanal.innerHTML = App.channels[canal].code;

            if (App.isMobile()) {
              thisCanal.classList.add("col-"+sizeMobile);
            } else {
              thisCanal.classList.add("col-"+size);
            }
            thisCanal.classList.add("stream");
            thisCanal.setAttribute("data-canal", canal);
            var losCanales = document.getElementById("los-canales");
            losCanales.appendChild(thisCanal);
            var n = document.querySelector('button[data-canal="'+ canal +'"]');
            n.classList.remove("btn-outline-secondary");
            n.classList.add("btn-primary");
        }
    },
    remove: function(canal){
      var findCanal = document.querySelector('div[data-canal="'+ canal +'"]');
      var losCanales = document.getElementById("los-canales");
      if(findCanal != null){
          losCanales.removeChild(findCanal);
          var n = document.querySelector('button[data-canal="'+ canal +'"]');
          n.classList.remove("btn-primary");
          n.classList.add("btn-outline-secondary");
        }
    },
    isMobile: function(){
        var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    },
        seedModal: function(){
            for(const llave in App.channels) {
                let buttonTV;
                buttonTV = document.createElement("button");
                buttonTV.classList.add("btn");
                buttonTV.classList.add("btn-outline-secondary");
                buttonTV.setAttribute("data-canal", llave);
                buttonTV.innerHTML = App.channels[llave].nombre;
                let n = document.querySelector(".modal-body");
                n.appendChild(buttonTV);
                buttonTV.addEventListener("click", function(){
                    if(buttonTV.getAttribute("class").includes("btn-outline-secondary")){
                      App.add(llave);
                    } else if(buttonTV.getAttribute("class").includes("btn-primary")){
                      App.remove(llave);
                    }
                })
            };
        },
    init: function(){
        App.seedModal();

        App.add("t13-movil");
        App.add("cnn-cl");

        if (!App.isMobile()) {
            App.add("veinticuatro-play");
            App.add("cima");
            App.add("meganoticias");
            App.add("cooperativa");
        }
    }
};

App.init();

function updateClock() {
    var now = new Date();
    localtime = now.toTimeString().slice(0,8);
    utctime = now.toUTCString().slice(17, 25);
    var santiago = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDay(), now.getUTCHours()-3, now.getUTCMinutes(), now.getUTCSeconds());
    santiagotime = santiago.toTimeString().slice(0,8);
    document.getElementById("time").innerHTML = localtime;
    document.getElementById("UTCtime").innerHTML = utctime;
    document.getElementById("santiagotime").innerHTML = santiagotime;
    setTimeout(updateClock, 1000);
}

updateClock();

var modal = document.getElementById("custom-modal");
var btn = document.getElementById("custom-btn");
var span = document.getElementById("custom-close");
var span2 = document.getElementById("custom-close2");

btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
  modal.style.display = "none";
}

var hue = document.getElementById("FormControlSelect1");

hue.onchange = function(event) {
    size = event.target.value
    sizeMobile = event.target.value
    let canal2 = document.querySelectorAll(".stream");
    for(let videos of canal2){
        videos.classList.remove("col-12", "col-6", "col-4", "col-3", "col-2");
        videos.classList.add("col-" + event.target.value);
        console.log(videos)
    }
}

var anchoStreams = document.getElementById("formControlRange");

anchoStreams.oninput = function(event){
  let streams2 = document.getElementById("los-canales");
  console.log(streams2)
  streams2.style.maxWidth = event.target.value + "%"
}
