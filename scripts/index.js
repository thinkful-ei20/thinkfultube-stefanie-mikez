'use strict';

/* global $ */

const API_KEY = 'AIzaSyCk4bzHaQSIHS94qA6SvKdILsnqHvZSk8c';

/*
  We want our store to hold a `videos` array of "decorated" objects - i.e. objects that
  have been transformed into just the necessary data to display on our page, compared to the large
  dataset Youtube will deliver to us.  Example object:
  
  {
    id: '98ds8fbsdy67',
    title: 'Cats dancing the Macarena',
    thumbnail: 'https://img.youtube.com/some/thumbnail.jpg'
  }

*/
const store = {
  videos: []
};

const data = {
  'kind': 'youtube#searchListResponse',
  'etag': '"RmznBCICv9YtgWaaa_nWDIH1_GM/E0EGwHmdn4F7HMqj4ylkUakfJ1w"',
  'nextPageToken': 'CAUQAA',
  'regionCode': 'US',
  'pageInfo': {
    'totalResults': 1000000,
    'resultsPerPage': 5
  },
  'items': [
    {
      'kind': 'youtube#searchResult',
      'etag': '"RmznBCICv9YtgWaaa_nWDIH1_GM/deSjmv-L3Odn_UkrS_7dLb3pmQs"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'hY7m5jjJ9mM'
      },
      'snippet': {
        'publishedAt': '2017-05-31T09:30:02.000Z',
        'channelId': 'UC9obdDRxQkmn_4YpcBMTYLw',
        'title': 'CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation',
        'description': 'Cats are amazing creatures because they make us laugh all the time! Watching funny cats is the hardest try not to laugh challenge! Just look how all these cats & kittens play, fail, get along...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/hY7m5jjJ9mM/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/hY7m5jjJ9mM/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/hY7m5jjJ9mM/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'Tiger FunnyWorks',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"RmznBCICv9YtgWaaa_nWDIH1_GM/_pVbkdlwMUge641HBYKrYT2XHQo"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'kcKM00lmrjQ'
      },
      'snippet': {
        'publishedAt': '2018-03-28T12:00:05.000Z',
        'channelId': 'UCKy3MG7_If9KlVuvw3rPMfw',
        'title': 'NO WAY you can WATCH  & NOT LAUGH! - Super FUNNY CATS',
        'description': 'Cats and kittens are simply the best animals, they never fail to make us happy and laugh! This funny cats compilation is simply the best and the hardest try not to laugh challenge ever! Just...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/kcKM00lmrjQ/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/kcKM00lmrjQ/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/kcKM00lmrjQ/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'Tiger Productions',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"RmznBCICv9YtgWaaa_nWDIH1_GM/m0cLx-6u-Qe9vi8zdw2HEgmzw0E"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'i-AXImNxCAE'
      },
      'snippet': {
        'publishedAt': '2018-03-07T12:36:04.000Z',
        'channelId': 'UCKy3MG7_If9KlVuvw3rPMfw',
        'title': 'Are ORANGE CATS the FUNNIEST CATS? - Super FUNNY COMPILATION that will make you DIE LAUGHING',
        'description': 'Cats are so cute and super funny animals, especially orange cats! They make us laugh all the time and heal our bad mood! This funny cat compilation is the hardest TRY NOT TO LAUGH challenge!...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/i-AXImNxCAE/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/i-AXImNxCAE/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/i-AXImNxCAE/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'Tiger Productions',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"RmznBCICv9YtgWaaa_nWDIH1_GM/6jmRaKhqgw-vqRPPmIQPu7t_icg"',
      'id': {
        'kind': 'youtube#video',
        'videoId': '3vDV1F_fngc'
      },
      'snippet': {
        'publishedAt': '2018-02-16T15:37:18.000Z',
        'channelId': 'UCKy3MG7_If9KlVuvw3rPMfw',
        'title': 'BIG CATS, SMALL CATS, it doesn\'t matter, they are ALL FUNNY! - GET READY to LAUGH!',
        'description': 'Big cats, small cats, it doesn\'t matter, all cats are super cute and funny! This cat compilation is the hardest TRY NOT TO LAUGH challenge ever! Just look how all these big and small cats play,...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/3vDV1F_fngc/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/3vDV1F_fngc/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/3vDV1F_fngc/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'Tiger Productions',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"RmznBCICv9YtgWaaa_nWDIH1_GM/7q8vhq-xY7Q0TxEtBWKYbsZPays"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'axgFo7QazQo'
      },
      'snippet': {
        'publishedAt': '2018-03-22T12:17:32.000Z',
        'channelId': 'UCKy3MG7_If9KlVuvw3rPMfw',
        'title': 'The FUNNIEST CAT videos - WATCHING WITHOUT LAUGHING is IMPOSSIBLE!',
        'description': 'Cats and kittens are super funny animals and they make us laugh all the time! This funny cats compilation is simply the best and the hardest try not to laugh challenge ever! Just look how all...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/axgFo7QazQo/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/axgFo7QazQo/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/axgFo7QazQo/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'Tiger Productions',
        'liveBroadcastContent': 'none'
      }
    }
  ]
};

// TASK: Add the Youtube Search API Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
const fetchVideos = function(searchTerm, callback) {
  const query = {
    part: 'snippet',
    key: API_KEY,
    q: `${searchTerm}`,
    maxResults: 5,
  };
  $.getJSON(BASE_URL, query, callback);
};


// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`, 
// `thumbnail` which each hold the appropriate values from the API item object. You 
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
const decorateResponse = function(response) {
  const results = [{id: 'id', title: 'title', thumbnail: 'thumbnail'}];
  response.items.map();
  return results;
};


// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
const generateVideoItemHtml = function(video) { 
  return `
  <li data-videoId="${video.id}"> 
  <img src="${video.thumbnail}" />
  <p>${video.title}</p>
  `; 
};

// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.items
// TEST IT!
const addVideosToStore = function(videos) {
  videos = store.items.val(data);
  console.log(videos);
};


// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function() {
  const results = store.videos.map(generateVideoItemHtml);
  $('.results').append(results);
  console.log(results);
};

// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!

const handleFormSubmit = function() { $('#form').submit(event => { 
  event.preventDefault(); 
  const searchInput = $('#search-term').val(); 
  $('#search-term').val('');

  fetchVideos(searchInput, function (data) {
    console.log(data); 
  }
  );}); //fetchVideos(searchValue, function()) };
};
// When DOM is ready:
$(function () {
  handleFormSubmit(); 
});
