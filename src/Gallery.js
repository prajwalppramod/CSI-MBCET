import React from 'react'
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import img5 from './images/5.png';
import img6 from './images/6.png';
import img7 from './images/7.png';
import img8 from './images/8.png';
import img9 from './images/9.png';
const Gallery = () => {
    return (
        <div class="flex justify-center bg-black my-8">
            <div class="grid w-2/3 grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={img1} alt="info"></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={img2} alt=""></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={img3} alt=""></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={img7} alt=""></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={img8} alt=""></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={img6} alt=""></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={img4} alt=""></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={img5} alt=""></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={img9} alt=""></img>
                </div>
                
            </div>
        </div>
    )
}

export default Gallery