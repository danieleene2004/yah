from flask import Flask
from flask_cors import CORS
from flask import jsonify
app = Flask(__name__)
CORS(app)

...
@app.route('/simple_json')
def simple_json():
    return jsonify('{saluto:ciao}')

if __name__=='__main__':
    app.run(host="0.0.0.0", port=5000)
