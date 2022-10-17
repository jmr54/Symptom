from flask import Flask, request
from flask_cors import CORS, cross_origin
import json
from flask import Flask, request, jsonify
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from core import app


api = Flask(__name__)
CORS(api, support_credentials=True)

api.config["JWT_SECRET_KEY"] = "please-remember-to-change-me"
jwt = JWTManager(api)


@api.route('/token', methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return {"msg": "Wrong email or password"}, 401

    access_token = create_access_token(identity=email)
    response = {"access_token":access_token}
    return response

@api.route('/search', methods = ["POST", "GET"])
@cross_origin(supports_credentials=True)
def test():
    url = "https://health.gov/myhealthfinder/api/v3/topicsearch.json?keyword="
    data = request.data.decode('UTF-8')
    new_data = data.replace("\"", "")
    final = url + new_data
    return final
    

if __name__ == '__main__':
    api.run(host='0.0.0.0', port=5000, debug=True)