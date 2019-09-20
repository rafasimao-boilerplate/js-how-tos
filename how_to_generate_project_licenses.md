# How to Generate a Licenses csv at a node project

### License-Checker

Reference [link](https://medium.com/@fokusman/the-easiest-way-to-check-all-your-npm-dependency-licenses-753075ef1d9d)

Create a json file like this:
```
{
  "name": "",
  "version": "",
  "licenses": ""
}
```
to use as a template of fields to get the right columns from the package libs.


Then run this command passing the json file as argument and extracting the informations at file.csv:
```
npx license-checker --customPath file.json --csv --out file.csv
```
