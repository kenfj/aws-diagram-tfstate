# AWS Diagram Terraform

* This is React app to draw AWS architecture diagram from `terraform.tfstate`
* This is a simple trial prototype version.

<p align="center">
<img src="https://user-images.githubusercontent.com/44661517/54082460-a6bc0100-4359-11e9-87cf-2d8b768c3057.png" width="300">
</p>


## How to use

```bash
# just open the index page. (no server required.)
open app/index.html
```


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

```bash
# as of the version below
node --version
v10.15.0
npm --version
6.6.0
```

## Reference

* Add React in One Minute
  - https://reactjs.org/docs/add-react-to-a-website.html
* How to minify
  - https://gist.github.com/gaearon/42a2ffa41b8319948f9be4076286e1f3
* terraform official examples used to generate sample tfstate files
 - https://github.com/terraform-providers/terraform-provider-aws/tree/master/examples
