{
  "mappingType": "equivalent",
  "synonyms": [
    "book",
    "novel",
    "comic",
    "manual",
    "ledger",
    "guide"
  ]
}



{
  "mappings": {
    "dynamic": true
  },
  "analyzer": "lucene.english",
  "synonyms": [
    {
      "name": "en_synonyms",
      "source": {
        "collection": "my_syns"
      },
      "analyzer": "lucene.english"
    }
  ]
}


