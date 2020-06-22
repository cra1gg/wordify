import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import requests

cred = credentials.Certificate("firebasecreds.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://wordify-4eccd.firebaseio.com/"
})

ref = db.reference('/words')
f = open("output.txt", "r")
lst = f.readlines()
for word in lst:
    key = ref.push({
        'word': word.rstrip("\n"),
    })
    print(key)

#ref = db.reference('/words')
#snapshot = ref.order_by_key().limit_to_first(1).get()
#for key in snapshot:
#    print(snapshot.get(key).get("word"))
