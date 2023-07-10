import React from 'react';
import zeldaLogo from './assets/game-icons/original-logo.jpg';
import marioLogo from './assets/game-icons/odyssey-logo.jpg';
import metroidLogo from './assets/game-icons/metroid1-logo.jpg';
import ffLogo from './assets/game-icons/ff1-logo.jpg';
import pokemonLogo from './assets/game-icons/pokemon-logo.png';
import kirbyLogo from './assets/game-icons/kirby-logo.png';
import earthboundLogo from './assets/game-icons/earthbound-logo.png';
import fzeroLogo from './assets/game-icons/fzero-logo.png';
import dkcLogo from './assets/game-icons/dkc-logo.png';
import starfoxLogo from './assets/game-icons/starfox-logo.png';
import warioLogo from './assets/game-icons/wario-logo.png';
import megamanLogo from './assets/game-icons/megaman-logo.png';
import megamanxLogo from './assets/game-icons/megamanx-logo.png';
import dqLogo from './assets/game-icons/dq-logo.png';
import smashbrosLogo from './assets/game-icons/smashbros-logo.png';
import castlevaniaLogo from './assets/game-icons/castlevania-logo.png';

function HistoryIndex() {
  return (
    <div className="history-grid">
      <div id="history-links">
        <a href="/zelda_history"><img src={zeldaLogo} alt="Legend of Zelda logo" width="150" /></a>
        <a href="/mario_history"><img src={marioLogo} alt="Super Mario logo" width="150" /></a>
        <a href="/metroid_history"><img src={metroidLogo} alt="Metroid logo" width="150" /></a>
        <a href="/ff_history"><img src={ffLogo} alt="Final Fantasy logo" width="150" /></a>
        <a href="/pkmn_history"><img src={pokemonLogo} alt="Pokemon logo" width="150" /></a>
        <a href="/kirby_history"><img src={kirbyLogo} alt="Kirby logo" width="150" /></a>
        <a href="/earthbound_history"><img src={earthboundLogo} alt="Earthbound logo" width="150" /></a>
        <a href="/fzero_history"><img src={fzeroLogo} alt="F-Zero logo" width="150" /></a>
        <a href="/dkc_history"><img src={dkcLogo} alt="Donkey Kong Country logo" width="150" /></a>
        <a href="/starfox_history"><img src={starfoxLogo} alt="Starfox logo" width="150" /></a>
        <a href="/warioland_history"><img src={warioLogo} alt="Wario logo" width="150" /></a>
        <a href="/megaman_history"><img src={megamanLogo} alt="Megaman logo" width="150" /></a>
        <a href="/megamanx_history"><img src={megamanxLogo} alt="Megaman X logo" width="150" /></a>
        <a href="/megamanx_history"><img src={dqLogo} alt="Dragon Quest logo" width="150" /></a>
        <a href="/megamanx_history"><img src={smashbrosLogo} alt="Smash Bros logo" width="150" /></a>
        <a href="/megamanx_history"><img src={castlevaniaLogo} alt="Castlevania logo" width="150" /></a>
      </div>
    </div>
  );
}

export default HistoryIndex;
