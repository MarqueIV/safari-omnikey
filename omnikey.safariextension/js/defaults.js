var Omnikey = Omnikey || {};

Omnikey.STORAGE_KEY = 'sites';
Omnikey.default_sites = [
  {
    key         : "az",
    description : "Amazon Product Search",
    url         : "https://www.amazon.com/s?k={search}"
  },
  {
    key         : "azo",
    description : "Amazon Order List/Search",
    url         : "https://www.amazon.com/gp/your-account/order-history?search={search}"
  },
  {
    key         : "yt",
    description : "YouTube",
    url         : "http://www.youtube.com/results?search_query={search}"
  },
  {
    key         : "spot",
    description : "Spotify",
    url         : "https://open.spotify.com/search/results/{%search}"
  },
  {
    key         : "ebay",
    description : "eBay",
    url         : "https://www.ebay.com/sch/i.html?_nkw={search}"
  },
  {
    key         : "wiki",
    description : "Wikipedia",
    url         : "https://en.wikipedia.org/wiki/Special:Search?search={search}"
  },
  {
    key         : "gm",
    description : "Map Location",
    url         : "https://www.google.com/maps/search/{search}"
  },
  {
    key         : "gd",
    description : "Google Directions",
    url         : "https://www.google.com/maps/dir/41-21+28th+St,+Long+Island+City,+NY+11101,+USA/{search}"
  },
  {
    key         : "rt",
    description : "Rotten Tomatoes",
    url         : "http://www.rottentomatoes.com/search/?search={search}"
  },
  {
    key         : "imdb",
    description : "IMDB",
    url         : "http://www.imdb.com/find?q={search}&s=all"
  },
  {
    key         : "mc",
    description : "Metacritic",
    url         : "https://www.metacritic.com/search/all/{search}/results"
  }
];
