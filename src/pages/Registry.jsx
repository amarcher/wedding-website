import React from 'react';

import BackgroundImage from '../components/BackgroundImage';
import PositanoSunset from '../photos/PositanoSunset.jpeg';
import PreloadedImage from '../components/PreloadedImage';
import { registryInfo } from '../content';

import './Registry.scss';

const DEFAULT_AMOUNT = 100;
const REGISTRY_LINK = `https://www.theknot.com/registry/checkout/33650824/88a6f176-bc94-4f0a-a467-0b06b939dc4a?redirect=https%3A%2F%2Fregistry.theknot.com%2Fandrew-archer-alicia-yang-november-2019-ri%2F33650824&quantity=${DEFAULT_AMOUNT}`;

function Registry() {
  return (
    <div className="registry">
      <BackgroundImage src={PositanoSunset} className="registry__background" />
      <div className="registry__container">
        <PreloadedImage
          className="registry__image"
          imageClassName="registry__image-inside"
          src={PositanoSunset}
        />
        <div className="registry__detail">
          {registryInfo.map(info => (
            <p className="registry__info">{info}</p>
          ))}
          <a
            className="registry__link"
            type="button"
            href={REGISTRY_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Gift Any Amount
          </a>
        </div>
      </div>
    </div>
  );
}

export default Registry;
