csv_files=$(ls extra/mock/*.csv | xargs -n1 basename -s .csv)
IFS=$'\n' read -rd '' -a csv_array <<<"$csv_files"

for i in "${csv_array[@]}"
do
    mongoimport --type csv --headerline -d mock -c $i --file extra/mock/$i.csv
done