import React from 'react';
import { Anchor } from './Anchor';

export const Tutorial = () => (
  <div>
    Näin saat oikeanlaisen CSV-tiedoston Osuuspankin sivuilta:
    <div className="ml-8">
      <ol className="list-decimal">
        <li>Mene sivustolle <Anchor target="https://www.op.fi">www.op.fi</Anchor> työpöytäversioon.</li>
        <li>Valitse yläpalkin Rahat-valikosta Tapahtumavirta</li>
        <li>Valitse ylhäältä tili jonka tapahtumat haluat siirtää.</li>
        <li>
          Tilivalintalistan oikealla puolella on nappula jossa on kolme pistettä.
          Paina siitä ja valitse "Tulosta tiliotteita".
        </li>
        <li>Valitse ajanjakso jolta haluat hakea tapahtumat ja paina "Hae".</li>
        <li>Valitse "Lataa tilitapahtumat tiedostona (csv)"</li>
      </ol>
    </div>
  </div>
);
