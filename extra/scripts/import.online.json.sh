for i in applogs caccountroutings caccounts cardstatusxes cardxes cextensions ctransactions currencies peoples products
do
   mongoimport --uri "mongodb+srv://kurt:kurt@cluster0.7gdpzrx.mongodb.net/"  -d prime -c $i --file extra/exports/$i.json
done