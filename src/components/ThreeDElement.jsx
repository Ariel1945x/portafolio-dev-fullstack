import { Application } from '@splinetool/runtime';
import { useEffect } from 'react';

const ThreeDElement = () => {
    useEffect(() => {
        const canvas = document.getElementById('canvas3d');
        const app = new Application(canvas);
        app.load('https://prod.spline.design/qTfp1xSaBi6nYWjc/scene.splinecode');

        canvas.height = 200;
    }, [Application]);

    return (
        <canvas id='canvas3d' className='canvas3d'></canvas>
    )
}

export default ThreeDElement