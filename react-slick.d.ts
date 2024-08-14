// react-slick.d.ts
declare module 'react-slick' {
    import { Component } from 'react';

    export interface Settings {
        dots?: boolean;
        arrows?: boolean;
        autoplay?: boolean;
        infinite?: boolean;
        speed?: number;
        autoplaySpeed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        fade?: boolean;
    }

    export default class Slider extends Component<Settings, {}> {
        slickPrev(): void;
        slickNext(): void;
    }
}
