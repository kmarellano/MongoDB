for i in applogs caccountroutings caccounts cardstatusxes cardxes cextensions ctransactions currencies peoples products
do
   mongoimport  -d prime -c $i --file extra/exports/$i.json
done