for i in applogs caccountroutings caccounts cardstatusxes cardxes cextensions ctransactions currencies peoples products
do
   mongoexport -d prime -c $i --out $(pwd)/extra/exports/$i.json
done