exports = function({ query, headers, body}, response) {

  var conn = context.services.get("mongodb-atlas").db("sample_mflix").collection("movies");
  
  const decodedQuery = decodeURIComponent(query.query);

  let searchAggregation = [
    {
      '$search': {
        'text': {
          'path': 'fullplot', 
          'query': decodedQuery
        }, 
        'highlight': {
          'path': 'fullplot'
        }
      }
    }, {
      '$limit': 15
    }, {
      '$project': {
        '_id': 0, 
        'title': 1, 
        'poster': 1, 
        'fullplot': 1, 
        'year': 1, 
        'score': {
          '$meta': 'searchScore'
        }, 
        'highlight': {
          '$meta': 'searchHighlights'
        }
      }
    }
  ]
    
  return conn.aggregate(searchAggregation).toArray();

};
