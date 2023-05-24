

let foo = ()=>{


    // let newsApi = "79f42ab294404ac4a46d06a09336be0b";
    let newNewsAPI = 'SDY9bWp0xU-1H8LL9ir-Dn3P13LZI_bm6-lq1Fj-k1Y'

    let search = document.getElementById('search').value

   


var options = {
  method: 'GET',
  url: 'https://api.newscatcherapi.com/v2/search',
  params: {q: search, lang: 'en', sort_by: 'relevancy', page: '1'},
  headers: {
    'x-api-key': newNewsAPI
  }
};

axios.request(options).then(function (response) {


        response.data.articles.forEach(element => {

                let div1 = document.createElement('div');
            let span1 = document.createElement('span');
            let para = document.createElement('span');
            let maindiv = document.getElementById('maindiv');
            let authorName = document.createElement('h3')
            let articleDate = document.createElement('h3')

            let heading = document.createTextNode(element.title)
            let article = document.createTextNode(element.summary)
            let newHeading = "<q>" + element.title + "</q>"
            let newArticle = "<blockquote>" + element.summary + "<blockquote>"
            let theAuthor = document.createTextNode(element.author)
            let publishedDate = document.createTextNode(element.published_date)
            let newImage = document.createElement('img')
            newImage.src = element.media
            // span1.appendChild(newHeading)
            span1.innerHTML = newHeading
            // para.appendChild(article)
            authorName.appendChild(theAuthor)
            articleDate.appendChild(publishedDate)
            para.innerHTML = newArticle
            span1.className = 'heading';
            para.className = 'content';
            newImage.className = 'forimage'
            div1.appendChild(span1)
            div1.appendChild(newImage)
            div1.appendChild(authorName)
            div1.appendChild(articleDate)
            div1.appendChild(para)
            maindiv.appendChild(div1)
            console.log(newHeading)

        })
   

	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


}


