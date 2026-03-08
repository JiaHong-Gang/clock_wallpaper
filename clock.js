/*
Main clock update loop.
Runs continuously using requestAnimationFrame.
*/

function updateTime() {

    const now = new Date();

    /*
    Update center date display
    */
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    document.getElementById('center-date').innerText =
        `${year}年${month}月${day}日`;

    /*
    Extract time components
    */
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const ms = now.getMilliseconds();

    /*
    Calculate rotation angles.

    These formulas allow smooth rotation
    rather than discrete jumps.
    */

    const sDeg = ((s + ms / 1000) / 60) * 360;
    const mDeg = ((m + s / 60) / 60) * 360;
    const hDeg = ((h + m / 60) / 24) * 360;

    /*
    Rotate entire rings
    */

    document.getElementById('ring-h').style.transform =
        `rotate(${hDeg}deg)`;

    document.getElementById('ring-m').style.transform =
        `rotate(${mDeg}deg)`;

    document.getElementById('ring-s').style.transform =
        `rotate(${sDeg}deg)`;

    /*
    Remove previous active highlights
    */

    document.querySelectorAll('.ring-item.active')
        .forEach(el => el.classList.remove('active'));

    /*
    Highlight current hour/minute/second
    */

    const activeH = document.getElementById(`ring-h-${h}`);
    const activeM = document.getElementById(`ring-m-${m}`);
    const activeS = document.getElementById(`ring-s-${s}`);

    if (activeH) activeH.classList.add('active');
    if (activeM) activeM.classList.add('active');
    if (activeS) activeS.classList.add('active');

    /*
    Loop the animation
    */

    requestAnimationFrame(updateTime);
}

/* Start the clock */

updateTime();