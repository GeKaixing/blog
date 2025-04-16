```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .aa {
        position: absolute;
        left: 50%;
        top: 50%;
        translate: -50% -50%;
    }

    .bb {
        width: 200px;
        height: 200px;
        background: red;
        opacity: 0;
        transform: Scale(0);
        transform-origin: center bottom;
    }

    .activatebb {
        opacity: 1;
        transform: Scale(1);
        transition-property: all;
        transition-duration: 2s;
        transition-timing-function: ease;
    }

    .cc {
        width: 200px;
        height: 200px;
        background: green;
        position: fixed;
        left: 50%;
        translate: -50%;
        bottom: 0;
        transform: translateY(100%);
        transition-property: all;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
    }

    .activatecc {
        transition-property: all;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
        transform: translateY(0);
    }
    .dd{
        width: 200px;
        height: 200px;
        background: yellow;
        position: fixed;
        top: 0;
        left: 50%;
        translate: -50%;
        transform: translateY(-100%);
        transition-property: all;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
    }
    .activatedd {
        transition-property: all;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
        transform: translateY(0);

    }
    .ee{
        width: 200px;
        height: 200px;
        background: orange;
        position: fixed;
        left: 0;
        transform: translateX(-100%);
        transition-property: all;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
    }
    .activateee {
        transition-property: all;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
        transform: translateX(0);
    }
    .ff{
        width: 200px;
        height: 200px;
        background: blue;
        position: fixed;
        right: 0;
        transform: translateX(100%);
        transition-property: all;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
    }
    .activateff {
        transition-property: all;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
        transform: translateY(0);
    }
</style>

<body>
    <div class="bb">正下弹出</div>
    <button class="aa">点击我弹出</button>
    <div class="cc">向上弹出</div>
    <div class="dd">向下弹出</div>
    <div class="ee">向左弹出</div>
    <div class="ff">向右弹出</div>
</body>
<script>
    const bb = document.querySelector('.bb');
    const aa = document.querySelector('.aa');
    const cc = document.querySelector('.cc');
    const dd = document.querySelector('.dd');
    const ee = document.querySelector('.ee');
    const ff = document.querySelector('.ff');


    aa.onclick = () => {
        bb.classList.toggle('activatebb'); // Toggle visibility
        cc.classList.toggle('activatecc'); // Toggle visibility
        dd.classList.toggle('activatedd'); // Toggle visibility
        ee.classList.toggle('activateee'); // Toggle visibility
        ff.classList.toggle('activateff'); // Toggle visibility
    };

</script>

</html>
```
