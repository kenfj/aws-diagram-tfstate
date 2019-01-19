# AWS Diagram Terraform

* This is React app to draw AWS architecture diagram from `terraform.tfstate`


## How to minify the code

```bash
cd app
# compile src/like_button.js
npx babel --watch src --out-dir . --presets react-app/prod
# run minify
npx terser -c -m -o aws_diagram_tf.min.js -- aws_diagram_tf.js
# update the html
<script src="aws_diagram_tf.min.js"></script>
```

## Environment

```
$ node --version
v10.15.0
$ npm --version
6.6.0
```

## Reference

* Add React in One Minute
  - https://reactjs.org/docs/add-react-to-a-website.html
* How to minify
  - https://gist.github.com/gaearon/42a2ffa41b8319948f9be4076286e1f3
