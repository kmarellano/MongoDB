csv_files=$(ls extra/mock/*.csv | xargs -n1 basename -s .csv)
IFS=$'\n' read -rd '' -a csv_array <<<"$csv_files"

for i in "${csv_array[@]}"
do
    mongoimport --uri "mongodb+srv://kurt:kurt@cluster0.7gdpzrx.mongodb.net/" --type csv --headerline -d prime -c $i --file extra/mock/$i.csv
done