/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2dh80xdctg43b1r",
    "created": "2023-09-19 23:20:31.725Z",
    "updated": "2023-09-19 23:20:31.725Z",
    "name": "Posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aw5spnep",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "it1ojppu",
        "name": "content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2dh80xdctg43b1r");

  return dao.deleteCollection(collection);
})
