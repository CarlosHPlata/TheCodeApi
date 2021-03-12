# TheCodeApi
Api using express and sequalize

All code was done by Carlos Herrera without the use of frameworks or libraries exept the Sequelize and Express libraries.

To modify the DB connections go to ```db/db``` and change the constants.

## Configurations

* You can run the sync method by going to ```db/db``` and modifying the ```SYNC``` constant to ```true```
* You can create tables and dummy data by:
  * Modifying the ```RUN_IMPORTS``` to ```true``` inside ```db/db``` that will run the imports at ```npm start```
  * Execute ```npm run import``` on the project"

## End Points:

### User end Point:

EndPoint | Method | Description | Quary Parameters | Body Parameters | Response 
--- | --- | --- | --- | --- | --- 
```/user``` | GET | Get all users | N/A | N/A | ```{users: [ {id, firstName, lastName, birthday, password, gender_id}, ...]}```
```/user/:id``` | GET | Get one user by id | N/A | N/A | ```{user: {id, firstName, lastName, birthday, password, gender_id}```
```/user``` | POST | Insert one user | N/A | ```{user: {firstName, lastName, birthday, password, gender_id}``` | ```{user: {id, firstName, lastName, birthday, password, gender_id}```
```/user``` | PUT | Update one user | N/A | ```{user: {id, firstName, lastName, birthday, password, gender_id}``` | ```{user: {id, firstName, lastName, birthday, password, gender_id}```
```/user/:id``` | DELETE | Update one user | N/A | N/A | ``` {response: true\|false} ```

### Gender endPoint:
EndPoint | Method | Description | Quary Parameters | Body Parameters | Response 
--- | --- | --- | --- | --- | --- 
```/gender``` | GET | Get all genders | N/A | N/A | ```{genders: [ {id, name}, ...]}```
```/gender/:id``` | GET | Get one gender by id | N/A | N/A | ```{gender: {id, name}```
