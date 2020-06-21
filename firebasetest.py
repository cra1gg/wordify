from firebase import firebase

firebase = firebase.FirebaseApplication("https://wordify-4eccd.firebaseio.com/", None)
data = {
    'word': 'testing',
    'length': 5,
    'startswith': 't'
}

result = firebase.post('words/', data)
print(result)
