import React from 'react';
import { Anchor } from './Anchor';

export const Tutorial = () => (
  <div>
    Näin saat oikeanlaisen CSV-tiedoston Osuuspankin sivuilta:
    <div className="ml-8">
      <ol className="list-decimal">
        <li>Mene sivustolle <Anchor target="https://www.op.fi">www.op.fi</Anchor> työpöytäversioon.</li>
        <li>Valitse Päivittäiset raha-asiat</li>
        <li>Valitse Tapahtumavirta</li>
        <li>Valitse ylhäältä tili jonka tapahtumat haluat siirtää.</li>
        <li>
          Tilivalintalistan oikealla puolella on nappula jossa on kolme pistettä.
          Paina siitä ja valitse "Selaa tiliotteita".
        </li>
        <li>Valitse ajanjakso jolta haluat hakea tapahtumat ja paina sen valintanappia.</li>
        <li>Avautuvasta Verkkotiliotteen katselu-ikkunasta valitse "Lataa pelkät tilitapahtumat tiedostona (csv)"</li>
      </ol>
    </div>
  </div>
);
