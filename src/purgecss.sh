#!/bin/bash

# run production build
ng build --prod --output-hashing none

# go to the dist/yourProjectName folder
cd ./dist/portfolio || cd ./dist/Portfolio || exit

echo "Purging unused CSS..."

start=$(date +%s)

# make a new directory named 'css' (you can name it anything)
mkdir css

echo "The directory 'css' was created successfully"

# run PurgeCSS & make a new '.css' file inside the 'css' directory
purgecss --css ./styles.css --content ./index.html ./*.js --out ./css

echo "PurgeCSS has finished running."

# replace the 'dist/yourProjectName/styles.css' file with the 'dist/yourProjectName/css/styles.css' file
mv ./css/styles.css ./styles.css

echo "The 'styles.css' file has been replaced."

# delete the previously created 'css' directory
rm -r css

echo "The 'css' directory has been deleted."

# go back to the project root
cd ../..

echo "Custom PurgeCSS script has finished running."

end=$(date +%s)
runtime=$((end - start))
echo "Runtime: $runtime seconds"
