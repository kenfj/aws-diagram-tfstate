# Terraform Visualizer

draw AWS diagram from terraform.tfstate

* use jq to convert terraform.tfstate to mxGraph json
* convert the json to mxGraph xml
* this is pilot version and saved here just for reference
* the idea succeeded to React version
* jq was not enough to process the tfstate.
* xml was not a convenient way in javascript world.


## show resource list

```bash
jq -fr resource_list.jq terraform.tfstate
```

## xml manual procedure

* convert tfstate json to mxGraph json

```bash
jq -L ./jqlib -f parse_tfstate.jq terraform.tfstate | pbcopy
# copy the output json
```

* convert mxGraph json to mxGraph xml
  - http://www.utilities-online.info/xmltojson/
* copy and paste the xml to some file
* make the xml to one line (in vim, :%s/\t//g :%s/\n//g)
* copy the xml and paste to js source file


## Reference

* https://jgraph.github.io/mxgraph/docs/tutorial.html
* https://github.com/jgraph/mxgraph/tree/master/javascript/examples/
* mxGraph Made Easy 3 https://www.youtube.com/watch?v=ZnDTxbzvyfc
* https://stackoverflow.com/questions/39527357/mxgraph-create-graph-with-xml
* https://stackoverflow.com/questions/47335861/mxgraph-loading-xml-file
