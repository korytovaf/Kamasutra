import React from "react";


const prefix = 'img';

const files = {
    byId: {
        'facebook': {
            width: 512,
            height: 512,
            viewBox: [0,0,24,24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"/>'
        },
        'github': {
            width: 512,
            height: 512,
            viewBox: [0,0,512,512],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="m256 0c-140.609375 0-256 115.390625-256 256 0 119.988281 84.195312 228.984375 196 256v-84.695312c-11.078125 2.425781-21.273438 2.496093-32.550781-.828126-15.128907-4.464843-27.421875-14.542968-36.546875-29.910156-5.816406-9.8125-16.125-20.453125-26.878906-19.671875l-2.636719-29.882812c23.253906-1.992188 43.371093 14.167969 55.3125 34.230469 5.304687 8.921874 11.410156 14.152343 19.246093 16.464843 7.574219 2.230469 15.707032 1.160157 25.183594-2.1875 2.378906-18.972656 11.070313-26.074219 17.636719-36.074219v-.015624c-66.679687-9.945313-93.253906-45.320313-103.800781-73.242188-13.976563-37.074219-6.476563-83.390625 18.238281-112.660156.480469-.570313 1.347656-2.0625 1.011719-3.105469-11.332032-34.230469 2.476562-62.546875 2.984375-65.550781 13.078125 3.867187 15.203125-3.890625 56.808593 21.386718l7.191407 4.320313c3.007812 1.792969 2.0625.769531 5.070312.542969 17.371094-4.71875 35.683594-7.324219 53.726563-7.558594 18.179687.234375 36.375 2.839844 54.464844 7.75l2.328124.234375c-.203124-.03125.632813-.148437 2.035157-.984375 51.972656-31.480469 50.105469-21.191406 64.042969-25.722656.503906 3.007812 14.128906 31.785156 2.917968 65.582031-1.511718 4.65625 45.058594 47.300781 19.246094 115.753906-10.546875 27.933594-37.117188 63.308594-103.796875 73.253907v.015624c8.546875 13.027344 18.816406 19.957032 18.761719 46.832032v105.722656c111.808594-27.015625 196-136.011719 196-256 .003906-140.609375-115.386719-256-255.996094-256zm0 0"/>'
        },
        'instagram': {
            width: 512.001,
            height: 512.001,
            viewBox: [0,0,512.001,512.001],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm-117.40625 395.996094c-77.195312 0-139.996094-62.800782-139.996094-139.996094s62.800782-139.996094 139.996094-139.996094 139.996094 62.800782 139.996094 139.996094-62.800782 139.996094-139.996094 139.996094zm143.34375-246.976563c-22.8125 0-41.367188-18.554687-41.367188-41.367187s18.554688-41.371094 41.367188-41.371094 41.371094 18.558594 41.371094 41.371094-18.558594 41.367187-41.371094 41.367187zm0 0"/><path xmlns="http://www.w3.org/2000/svg" d="m256 146.019531c-60.640625 0-109.980469 49.335938-109.980469 109.980469 0 60.640625 49.339844 109.980469 109.980469 109.980469 60.644531 0 109.980469-49.339844 109.980469-109.980469 0-60.644531-49.335938-109.980469-109.980469-109.980469zm0 0"/><path xmlns="http://www.w3.org/2000/svg" d="m399.34375 96.300781c-6.257812 0-11.351562 5.09375-11.351562 11.351563 0 6.257812 5.09375 11.351562 11.351562 11.351562 6.261719 0 11.355469-5.089844 11.355469-11.351562 0-6.261719-5.09375-11.351563-11.355469-11.351563zm0 0"/>'
        },
        'mainlink': {
            width: 512,
            height: 512,
            viewBox: [0,0,24,24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z"/><path xmlns="http://www.w3.org/2000/svg" d="m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z"/>'
        },
        'twitter': {
            width: 512,
            height: 512,
            viewBox: [0,0,512,512],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016 c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992 c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056 c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152 c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792 c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44 C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568 C480.224,136.96,497.728,118.496,512,97.248z"/>'
        },
        'website': {
            width: 460.298,
            height: 460.297,
            viewBox: [0,0,460.298,460.297],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M230.149,120.939L65.986,256.274c0,0.191-0.048,0.472-0.144,0.855c-0.094,0.38-0.144,0.656-0.144,0.852v137.041 c0,4.948,1.809,9.236,5.426,12.847c3.616,3.613,7.898,5.431,12.847,5.431h109.63V303.664h73.097v109.64h109.629 c4.948,0,9.236-1.814,12.847-5.435c3.617-3.607,5.432-7.898,5.432-12.847V257.981c0-0.76-0.104-1.334-0.288-1.707L230.149,120.939 z"/><path xmlns="http://www.w3.org/2000/svg" d="M457.122,225.438L394.6,173.476V56.989c0-2.663-0.856-4.853-2.574-6.567c-1.704-1.712-3.894-2.568-6.563-2.568h-54.816 c-2.666,0-4.855,0.856-6.57,2.568c-1.711,1.714-2.566,3.905-2.566,6.567v55.673l-69.662-58.245 c-6.084-4.949-13.318-7.423-21.694-7.423c-8.375,0-15.608,2.474-21.698,7.423L3.172,225.438c-1.903,1.52-2.946,3.566-3.14,6.136 c-0.193,2.568,0.472,4.811,1.997,6.713l17.701,21.128c1.525,1.712,3.521,2.759,5.996,3.142c2.285,0.192,4.57-0.476,6.855-1.998 L230.149,95.817l197.57,164.741c1.526,1.328,3.521,1.991,5.996,1.991h0.858c2.471-0.376,4.463-1.43,5.996-3.138l17.703-21.125 c1.522-1.906,2.189-4.145,1.991-6.716C460.068,229.007,459.021,226.961,457.122,225.438z"/>'
        },
        'vk': {
            width: 511.962,
            height: 511.962,
            viewBox: [0,0,511.962,511.962],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M507.399,370.471c-1.376-2.304-9.888-20.8-50.848-58.816c-42.88-39.808-37.12-33.344,14.528-102.176 c31.456-41.92,44.032-67.52,40.096-78.464c-3.744-10.432-26.88-7.68-26.88-7.68l-76.928,0.448c0,0-5.696-0.768-9.952,1.76 c-4.128,2.496-6.784,8.256-6.784,8.256s-12.192,32.448-28.448,60.032c-34.272,58.208-48,61.28-53.6,57.664 c-13.024-8.416-9.76-33.856-9.76-51.904c0-56.416,8.544-79.936-16.672-86.016c-8.384-2.016-14.528-3.36-35.936-3.584 c-27.456-0.288-50.72,0.096-63.872,6.528c-8.768,4.288-15.52,13.856-11.392,14.4c5.088,0.672,16.608,3.104,22.72,11.424 c7.904,10.72,7.616,34.848,7.616,34.848s4.544,66.4-10.592,74.656c-10.4,5.664-24.64-5.888-55.2-58.72 c-15.648-27.04-27.488-56.96-27.488-56.96s-2.272-5.568-6.336-8.544c-4.928-3.616-11.84-4.768-11.84-4.768l-73.152,0.448 c0,0-10.976,0.32-15.008,5.088c-3.584,4.256-0.288,13.024-0.288,13.024s57.28,133.984,122.112,201.536 c59.488,61.92,127.008,57.856,127.008,57.856h30.592c0,0,9.248-1.024,13.952-6.112c4.352-4.672,4.192-13.44,4.192-13.44 s-0.608-41.056,18.464-47.104c18.784-5.952,42.912,39.68,68.48,57.248c19.328,13.28,34.016,10.368,34.016,10.368l68.384-0.96 C488.583,400.807,524.359,398.599,507.399,370.471z"/>'
        },
        'youtube': {
            width: 512,
            height: 512,
            viewBox: [0,0,512,512],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M490.24,113.92c-13.888-24.704-28.96-29.248-59.648-30.976C399.936,80.864,322.848,80,256.064,80 c-66.912,0-144.032,0.864-174.656,2.912c-30.624,1.76-45.728,6.272-59.744,31.008C7.36,138.592,0,181.088,0,255.904 C0,255.968,0,256,0,256c0,0.064,0,0.096,0,0.096v0.064c0,74.496,7.36,117.312,21.664,141.728 c14.016,24.704,29.088,29.184,59.712,31.264C112.032,430.944,189.152,432,256.064,432c66.784,0,143.872-1.056,174.56-2.816 c30.688-2.08,45.76-6.56,59.648-31.264C504.704,373.504,512,330.688,512,256.192c0,0,0-0.096,0-0.16c0,0,0-0.064,0-0.096 C512,181.088,504.704,138.592,490.24,113.92z M192,352V160l160,96L192,352z"/>'
        }
    },
    allIds: [
        'facebook',
        'github',
        'instagram',
        'mainlink',
        'twitter',
        'website',
        'vk',
        'youtube'
    ]
}


function SVG(props) {

    if(props.isHidden) {
        return <svg display='none'>{props.children}</svg>;
    }

    let file = files.byId[props.id];

    if(!file) return null;

    let width   = props.width  || file.width  || null;
    let height  = props.height || file.height || null;
    let viewBox = file.viewBox
        ? file.viewBox.join(' ')
        : '0 0 '+props.width+' '+props.height;

    return props.isHidden
        ? <svg display='none'>{props.children}</svg>
        :(
            <svg
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                preserveAspectRatio='xMinYMin'
                width={width}
                height={height}
                viewBox={viewBox}
            >
                <use xlinkHref={'#'+prefix+'-'+props.id}/>
            </svg>
        );

}


function SVGSource(props) {

    return (
        <SVG isHidden={true}>
            <defs>
                {files.allIds.reduce((defs, fileId, fileIndex)=>{
                    const file = files.byId[fileId];
                    return defs.concat(
                        <g
                            key={fileIndex}
                            id={prefix+'-'+fileId}
                            dangerouslySetInnerHTML={{__html: file.data}}
                        >
                        </g>
                    );
                }, [])}
            </defs>
        </SVG>
    );

}


export {
    SVG,
    SVGSource
}