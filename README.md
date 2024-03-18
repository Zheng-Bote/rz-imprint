<div id="top" align="center">

# rz-imprint

A web component for german impressum or english legal notice

</div>

## Authors

- [@Zheng-Bote](https://www.github.com/Zheng-Bote)

## Version

v0.1.0

## License

[MIT](https://choosealicense.com/licenses/mit/)

## API Reference

#### Parameters

```
    <rz-imprint></rz-imprint>
```

```
    <rz-imprint language="de"></rz-imprint>
```

| Parameter  | Type     | Description                      |
| :--------- | :------- | :------------------------------- |
| `language` | `string` | **Optional**. "de" default: "en" |

## Installation

used folder structure

```bash
.
├── assets
│   ├── css
│   │   └── rz-imprint.css
│   ├── img
│   │   ├── rz-address_mail.svg
│   │   ├── rz-address_mail_white.svg
│   │   ├── rz-address_postal.png
│   │   └── rz-qr-code.svg
│   ├── impressum.htm
│   ├── js
│   │   └── rz-imprint.js
│   └── legal_notice.htm
├── index.html
└── README.md

```

replace rz-address\_[mail|postal|qr-code].svg with your content

## Usage/Examples

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="ZHENG Robert" />

    <title>Web Component</title>

    <meta name="description" content="Web Component for imprint" />
    <meta name="version" content="v0.1.0" />
    <meta name="author" content="ZHENG Robert" />

    <script src="./assets/js/rz-imprint.js"></script>
  </head>
  <body id="body">
    <main>
      <rz-imprint id="rz-imprint" language="en"></rz-imprint>
    </main>
  </body>
</html>
```

## Used By

This web component is used by the following web sites:

- [DigiDocuDev: web-based documentation management](https://www.digidocu.dev/imprint.html)

### the end

:vulcan_salute:

<p align="right">(<a href="#top">back to top</a>)</p>
