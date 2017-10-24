import React, { Component } from 'react';
import styled from 'styled-components'


//  Grid

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  * {
    box-sizing: border-box;
  }
`

let mobileGutter = `0.5rem`
let tabletGutter = `1rem`
let desktopGutter = `1rem`


const Col = styled.div`
  float:left;
  min-height: 0.5rem;
  width: calc(100% * (${props => props.desktop ? props.desktop : 12} / 12));
  padding-left: ${props => props.nogutter ? 0 : desktopGutter};
  padding-right: ${props => props.nogutter ? 0 : desktopGutter};
  /* Laptops */
  /* ----------- Non-Retina Screens ----------- */
  @media screen
    and (min-device-width: 1200px)
    and (max-device-width: 1600px)
    and (-webkit-min-device-pixel-ratio: 1) {
      width: calc(100% * (${props => props.desktop ? props.desktop : 12} / 12));
      padding-left: ${props => props.nogutter ? 0 : desktopGutter};
      padding-right: ${props => props.nogutter ? 0 : desktopGutter};
  }

  /* ----------- Retina Screens ----------- */
  @media screen
    and (min-device-width: 1200px)
    and (max-device-width: 1600px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (min-resolution: 192dpi) {
      width: calc(100% * (${props => props.desktop ? props.desktop : 12} / 12));
      padding-left: ${props => props.nogutter ? 0 : desktopGutter};
      padding-right: ${props => props.nogutter ? 0 : desktopGutter};
  }


  /* Tablets and Ipads */

  /* ----------- iPad 1, 2, Mini and Air ----------- */
  /* Portrait and Landscape */
  @media only screen
    and (min-device-width: 768px)
    and (max-device-width: 1024px)
    and (-webkit-min-device-pixel-ratio: 1) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* Portrait */
  @media only screen
    and (min-device-width: 768px)
    and (max-device-width: 1024px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 1) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* Landscape */
  @media only screen
    and (min-device-width: 768px)
    and (max-device-width: 1024px)
    and (orientation: landscape)
    and (-webkit-min-device-pixel-ratio: 1) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* ----------- iPad 3, 4 and Pro 9.7" ----------- */

  /* Portrait and Landscape */
  @media only screen
    and (min-device-width: 768px)
    and (max-device-width: 1024px)
    and (-webkit-min-device-pixel-ratio: 2) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* Portrait */
  @media only screen
    and (min-device-width: 768px)
    and (max-device-width: 1024px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* Landscape */
  @media only screen
    and (min-device-width: 768px)
    and (max-device-width: 1024px)
    and (orientation: landscape)
    and (-webkit-min-device-pixel-ratio: 2) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* ----------- iPad Pro 10.5" ----------- */

  /* Portrait and Landscape */
  @media only screen
    and (min-device-width: 834px)
    and (max-device-width: 1112px)
    and (-webkit-min-device-pixel-ratio: 2) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* Portrait */
  /* Declare the same value for min- and max-width to avoid colliding with desktops */
  /* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
  @media only screen
    and (min-device-width: 834px)
    and (max-device-width: 834px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* Landscape */
  /* Declare the same value for min- and max-width to avoid colliding with desktops */
  /* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
  @media only screen
    and (min-device-width: 1112px)
    and (max-device-width: 1112px)
    and (orientation: landscape)
    and (-webkit-min-device-pixel-ratio: 2) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* ----------- iPad Pro 12.9" ----------- */

  /* Portrait and Landscape */
  @media only screen
    and (min-device-width: 1024px)
    and (max-device-width: 1366px)
    and (-webkit-min-device-pixel-ratio: 2) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* Portrait */
  /* Declare the same value for min- and max-width to avoid colliding with desktops */
  /* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
  @media only screen
    and (min-device-width: 1024px)
    and (max-device-width: 1024px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* Landscape */
  /* Declare the same value for min- and max-width to avoid colliding with desktops */
  /* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
  @media only screen
    and (min-device-width: 1366px)
    and (max-device-width: 1366px)
    and (orientation: landscape)
    and (-webkit-min-device-pixel-ratio: 2) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* ----------- Galaxy Tab 2 ----------- */

  /* Portrait and Landscape */
  @media
    (min-device-width: 800px)
    and (max-device-width: 1280px) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* Portrait */
  @media
    (max-device-width: 800px)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* Landscape */
  @media
    (max-device-width: 1280px)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* ----------- Galaxy Tab S ----------- */

  /* Portrait and Landscape */
  @media
    (min-device-width: 800px)
    and (max-device-width: 1280px)
    and (-webkit-min-device-pixel-ratio: 2) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* Portrait */
  @media
    (max-device-width: 800px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* Landscape */
  @media
    (max-device-width: 1280px)
    and (orientation: landscape)
    and (-webkit-min-device-pixel-ratio: 2) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* ----------- Nexus 7 ----------- */

  /* Portrait and Landscape */
  @media screen
    and (device-width: 601px)
    and (device-height: 906px)
    and (-webkit-min-device-pixel-ratio: 1.331)
    and (-webkit-max-device-pixel-ratio: 1.332) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* Portrait */
  @media screen
    and (device-width: 601px)
    and (device-height: 906px)
    and (-webkit-min-device-pixel-ratio: 1.331)
    and (-webkit-max-device-pixel-ratio: 1.332)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* Landscape */
  @media screen
    and (device-width: 601px)
    and (device-height: 906px)
    and (-webkit-min-device-pixel-ratio: 1.331)
    and (-webkit-max-device-pixel-ratio: 1.332)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* ----------- Nexus 9 ----------- */

  /* Portrait and Landscape */
  @media screen
    and (device-width: 1536px)
    and (device-height: 2048px)
    and (-webkit-min-device-pixel-ratio: 1.331)
    and (-webkit-max-device-pixel-ratio: 1.332) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* Portrait */
  @media screen
    and (device-width: 1536px)
    and (device-height: 2048px)
    and (-webkit-min-device-pixel-ratio: 1.331)
    and (-webkit-max-device-pixel-ratio: 1.332)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }

  /* Landscape */
  @media screen
    and (device-width: 1536px)
    and (device-height: 2048px)
    and (-webkit-min-device-pixel-ratio: 1.331)
    and (-webkit-max-device-pixel-ratio: 1.332)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.tablet ? props.tablet : 8} / 8));
      padding-left: ${props => props.nogutter ? 0 : tabletGutter};
      padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }


  /* Mobile Responsivness */
  /* ----------- iPhone 4 and 4S ----------- */
  /* Portrait and Landscape */
  @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Portrait */
  @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

    /* Landscape */
  @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

  /* Portrait and Landscape */
  @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Portrait */
  @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Landscape */
  @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* ----------- iPhone 6, 6S, 7 and 8 ----------- */

  /* Portrait and Landscape */
  @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 667px)
    and (-webkit-min-device-pixel-ratio: 2) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Portrait */
  @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 667px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Landscape */
  @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 667px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* ----------- iPhone 6+, 7+ and 8+ ----------- */

  /* Portrait and Landscape */
  @media only screen
    and (min-device-width: 414px)
    and (max-device-width: 736px)
    and (-webkit-min-device-pixel-ratio: 3) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Portrait */
  @media only screen
    and (min-device-width: 414px)
    and (max-device-width: 736px)
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Landscape */
  @media only screen
    and (min-device-width: 414px)
    and (max-device-width: 736px)
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* ----------- iPhone X ----------- */

  /* Portrait and Landscape */
  @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 812px)
    and (-webkit-min-device-pixel-ratio: 3) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Portrait */
  @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 812px)
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Landscape */
  @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 812px)
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }
  /* ----------- Galaxy S3 ----------- */

  /* Portrait and Landscape */
  @media screen
    and (device-width: 320px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 2) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : 1}rem;
      padding-right: ${props => props.nogutter ? 0 : 1}rem;
  }

  /* Portrait */
  @media screen
    and (device-width: 320px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 2)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Landscape */
  @media screen
    and (device-width: 320px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 2)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* ----------- Galaxy S4, S5 and Note 3 ----------- */

  /* Portrait and Landscape */
  @media screen
    and (device-width: 320px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 3) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Portrait */
  @media screen
    and (device-width: 320px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Landscape */
  @media screen
    and (device-width: 320px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* ----------- Galaxy S6 ----------- */

  /* Portrait and Landscape */
  @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 4) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Portrait */
  @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 4)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Landscape */
  @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 4)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }


  /* ----------- Google Pixel ----------- */

  /* Portrait and Landscape */
  @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 3) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Portrait */
  @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Landscape */
  @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* ----------- Google Pixel XL ----------- */

  /* Portrait and Landscape */
  @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 4) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Portrait */
  @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 4)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Landscape */
  @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 4)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* ----------- HTC One ----------- */

  /* Portrait and Landscape */
  @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 3) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Portrait */
  @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Landscape */
  @media screen
    and (device-width: 360px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* ----------- Windows Phone ----------- */

  /* Portrait and Landscape */
  @media screen
    and (device-width: 480px)
    and (device-height: 800px) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Portrait */
  @media screen
    and (device-width: 480px)
    and (device-height: 800px)
    and (orientation: portrait) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

  /* Landscape */
  @media screen
    and (device-width: 480px)
    and (device-height: 800px)
    and (orientation: landscape) {
      width: calc(100% * (${props => props.mobile ? props.mobile : 4} / 4));
      padding-left: ${props => props.nogutter ? 0 : mobileGutter};
      padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  }

`

const Row = styled.div`
  min-height: 0.1rem;
  :before,
  :after {
    content:"";
    display: table ;
    clear:both;
  }
`
// End of the Grid


const PerfHeader = styled(Row)`
  background-color: #253040;
  color: white;
  padding: 0.5rem;
  border-radius: 5px 5px 0 0;
`

const PerfBody = styled(Row)`
  min-height: 300px;
  background-color: white;
  padding: 0.5rem;
`

const PerfFooter = styled(Row)`
  background-color: #253040;
  border-radius: 0 0 5px 5px;
  padding: 0.5rem;
`

const PerfRoot = styled.div`
  margin-top: 1rem;
`

const HeaderTitle = styled(Row)`

`

const HeaderDate = styled(Row)`
  justify-content: flex-end;
`

const PerformanceComponent = ({title, content}) => {
  return(
    <PerfRoot>
      <PerfHeader>
        <Col desktop={7} tablet={6} mobile={3}>
          <HeaderTitle><p></p></HeaderTitle>
        </Col>
        <Col desktop={5} tablet={2} mobile={1}>
          <HeaderDate><p></p></HeaderDate>
        </Col>
      </PerfHeader>
      <PerfBody>
          {content}
      </PerfBody>
      <PerfFooter>
        <Col>
        </Col>
      </PerfFooter>
    </PerfRoot>
  )
}


const HeaderRoot = styled(Row)`
  background-color: #9DC02E;
  padding: 1rem;
  align-items: flex-end;
  min-height: 3rem;
  @media all and (max-width:650px){
    padding: 1rem 0 1rem 0;
  }
`

const HeaderMenu = styled(Row)`
  justify-content: flex-end;
  align-items: baseline;
  @media all and (max-width:650px){

  }
`

const MenuItem = styled(Col)`
  cursor: pointer;
  color: white;
  padding-bottom: 0px;
  @media all and (max-width:650px){
    color: grey;
    background-color: white;
  }

`

const Logo = styled(Col)`
`

const Profile = styled(Col)`
`

// const HeaderComponent = () => {
//   return (
//     <HeaderRoot>
//       <Logo desktop={1} style={{color: "white"}}><strong><h2>Logo</h2></strong></Logo>
//       <Col desktop={9} nogutter>
//         <HeaderMenu>
//           <MenuItem desktop={3}><p>LEISTUNGSÜBERSICHT</p></MenuItem>
//           <MenuItem desktop={3}><p>WERBEKAMPAGNEN</p></MenuItem>
//           <MenuItem desktop={3}><p>BADRECHNER</p></MenuItem>
//           <MenuItem desktop={3}><p>BADRECHNER</p></MenuItem>
//         </HeaderMenu>
//       </Col>
//       <Profile desktop={2} style={{backgroundColor: "white", borderRadius: "5px 5px 5px 5px",paddingTop:"1rem", paddingBottom:"1rem"}}>
//         <h2>Profile</h2>
//       </Profile>
//     </HeaderRoot>
//   )
// }


const DateLabel = styled(Col)`
  display: flex;
  justify-content: flex-end;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Row>
              <Col>
                <h3></h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row style={{backgroundColor: "#253040", color: "white", borderRadius: "5px 5px 0 0",}}>
                  <Col desktop={1} tablet={1} mobile={4}><p>Sanitär</p></Col>
                  <DateLabel desktop={11} tablet={2} mobile={4}><p>Date</p></DateLabel>
                </Row>
                <Row>
                  <Col desktop={12} style={{backgroundColor: "#D3D3D3"}}>
                    <Row>
                      <Col desktop={6} tablet={4}>
                        <PerformanceComponent title={"Ihr Servicestatus"} content={"Clock"} />
                      </Col>
                      <Col desktop={6} tablet={4}>
                        <PerformanceComponent title ={"Neueste unbearbeitete Anfragen"} content={"Table"} />
                      </Col>
                    </Row>
                    <Row>
                      <Col desktop={6} tablet={4}>
                        <PerformanceComponent title={"Ihr Servicestatus"} content={"Clock"} />
                      </Col>
                      <Col desktop={6} tablet={4}>
                        <PerformanceComponent title ={"Neueste unbearbeitete Anfragen"} content={"Table"} />
                      </Col>
                    </Row>
                    <Row>
                      <Col desktop={6} tablet={4}>
                        <PerformanceComponent title={"Ihr Servicestatus"} content={"Clock"} />
                      </Col>
                      <Col desktop={6} tablet={4}>
                        <PerformanceComponent title ={"Neueste unbearbeitete Anfragen"} content={"Table"} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
