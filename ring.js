/*
Create items around a circular ring.

Parameters
id      -> DOM element id of the ring
count   -> number of items on the ring
radius  -> distance from center
suffix  -> label suffix (e.g. 时 / 分 / 秒)
*/
function createRingItems(id, count, radius, suffix) {

    const ring = document.getElementById(id);

    // Generate each element on the ring
    for (let i = 0; i < count; i++) {

        const itemEl = document.createElement('div');
        itemEl.className = 'ring-item';
        itemEl.id = `${id}-${i}`;

        // Create tick mark
        const tickEl = document.createElement('div');
        tickEl.className = `tick ${i % 5 === 0 ? 'long' : 'short'}`;

        // Create number label
        const numEl = document.createElement('div');
        numEl.className = 'num-label';

        numEl.innerText =
            String(i).padStart(2, '0') + suffix;

        itemEl.appendChild(tickEl);
        itemEl.appendChild(numEl);

        /*
        Calculate angular position.

        Items are distributed evenly around the circle.
        Negative angle = counter-clockwise layout.
        */
        const angleDeg = -i * (360 / count);

        itemEl.style.transform =
            `translate(-50%, -50%) rotate(${angleDeg}deg) translateX(${radius}px)`;

        ring.appendChild(itemEl);
    }
}

/* Initialize the three rings */

createRingItems('ring-h', 24, RADIUS_H, ' 时');
createRingItems('ring-m', 60, RADIUS_M, ' 分');
createRingItems('ring-s', 60, RADIUS_S, ' 秒');