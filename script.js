var navlink = document.getElementById('navlinks')

function callMenu(){
    if(navlink.style.left>'-5px'){
        navlink.style.left='-200px';
    }
    else{
        navlink.style.left='0';
    }
}

const searchForm = document.querySelector('.search');
const input = document.querySelector('input');
const newsList = document.querySelector('.news-list');
var headline = document.getElementById('headline')



function sideBarLink(lnk){
    var topic = lnk.getAttribute('value');
    console.log(topic);
    retrieve(topic);

}

function searchBarTopic(e){
    event.preventDefault();

    
    let topic = input.value;
    retrieve(topic);
}

function retrieve(topic){
    const apiKey="fc3a296a082340db9dc71fbbb003fa9e";
    console.log(topic);
    headline.innerHTML=topic;
    newsList.innerHTML="";

    const url = 'https://newsapi.org/v2/everything?q=' +
    topic + '&apiKey=' + apiKey;
    console.log(url);

    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
        data.articles.forEach(article=>{
            let li = document.createElement("li");
            let div = document.createElement('div');

            div.style.width='60vw';
            div.style.minHeight = '15vh';
            div.style.minWidth = '450px';
            div.style.borderRadius='10px';
            div.style.border='1px solid black';
            div.style.paddingLeft='15px';
            div.style.marginLeft='250px';



            div.style.marginTop='15px';
            div.style.position='relative';
            div.style.border='1px solid #ccc';

            // Adding Articles

            div.innerHTML="<a href='"+article.url+
            "' style='text-decoration:none'; target='_blank'>"+
            "<h5 style='color:black;width:70%;margin-top:10px;font-size:20px'>"+
            article.title + "</h5></a>";

            div.innerHTML+="<p style='color:grey; margin-top:15px;' >"+
            article.source.name+" | "+article.publishedAt+"</p>";

            div.innerHTML+="<a id='desc' href='"+article.url+
            "' target='_blank' style='text-decoration:none;'>"+
            "<h6 style='margin-top:10px; color:black;width:70%;"+
            " font-size:13px;color:#555; padding-bottom:15px;'>"+
            article.description+"</h6></a>";

            div.innerHTML+= "<a href='"+article.url+"' target='_blank'><img "+
            "style='position:absolute;top:10px;right:20px; border-radius:5px;' src='"
            +article.urlToImage+"' height='100px' width='100px'></a>";


            li.appendChild(div);
            newsList.appendChild(li);

        })
    })

}

