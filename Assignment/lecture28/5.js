// 5. Create a digital timer which prints time on console with each second

setInterval(() => {
    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    console.log(hour, ":", minute, ":", second);
}, 1000);
