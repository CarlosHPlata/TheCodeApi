# TheCodeApi
Api using express and sequalize

All code was done by Carlos Herrera without the use of frameworks or libraries exept the Sequelize and Express libraries.

To modify the DB connections go to ```db/db``` and change the constants.

## Configurations

* You can run the sync method by going to ```db/db``` and modifying the ```SYNC``` constant to ```true```
* You can create tables and dummy data by:
  * Modifying the ```RUN_IMPORTS``` to ```true``` inside ```db/db``` that will run the imports at ```npm start```
  * Execute ```npm run import``` on the project
