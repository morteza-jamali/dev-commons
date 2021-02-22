<h1 align="center">
  <b>Dev Commons</b>
</h1>

<p align="center">
  <a aria-label="Vercel logo" href="https://vercel.com">
    <img alt="Vercel" src="https://img.shields.io/badge/DEPLOYED%20ON%20Vercel-000000.svg?style=for-the-badge&logo=Vercel&labelColor=000">
  </a>
  <a aria-label="License" href="https://github.com/morteza-jamali/dev-commons/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&labelColor=000000">
  </a>
  <img alt="Version" src="https://img.shields.io/badge/version-1.1.0-blue?style=for-the-badge">
  <a aria-label="Github logo" href="https://github.com/morteza-jamali/dev-commons">
    <img alt="Github" src="https://img.shields.io/badge/Github-000000.svg?style=for-the-badge&logo=Github&labelColor=000">
  </a>
</p>

### Introduction

**Dev commons** is an api for accessing a set of config files needed to start a new project development .

Save your development config files and re-use in another projects without wasting time .

### Usage

Endpoint :

```text
https://dev-commons.vercel.app/api
```

Just set file name for request body file item .

> I recommend using [curl](https://curl.se/) for speed and simplicity .

### Example

Run this command in terminal :

```text
$ curl https://dev-commons.vercel.app/api -d "file=.gitignore" -o .gitignore
```
Now you have a `.gitignore` file in current directory .

You can also send request using other tools like [Postman](https://www.postman.com/) .

### Available files

- [.gitignore](https://github.com/morteza-jamali/dev-commons/blob/master/commons/.gitignore.common.txt)
- [.editorconfig](https://github.com/morteza-jamali/dev-commons/blob/master/commons/.editorconfig.common.txt)

### Customization

If you want to add yourself config files , do following steps :

1. Fork repository
1. Create files with `[filename].common.txt` name in `commons` directory
1. Deploy your repository to [Vercel](https://vercel.com)

Use your set of config files from anywhere :heart_eyes: