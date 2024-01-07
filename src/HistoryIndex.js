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
    <div className="logos-container">
      <div id="history-links">
        <a href="/zelda_timeline"><img src={zeldaLogo} alt="Legend of Zelda logo" width="150" /></a>
        <a href="/mario_timeline"><img src={marioLogo} alt="Super Mario logo" width="150" /></a>
        <a href="/metroid_timeline"><img src={metroidLogo} alt="Metroid logo" width="150" /></a>
        <a href="/finalfantasy_timeline"><img src={ffLogo} alt="Final Fantasy logo" width="150" /></a>
        <a href="/pkmn_timeline"><img src={pokemonLogo} alt="Pokemon logo" width="150" /></a>
        <a href="/kirby_timeline"><img src={kirbyLogo} alt="Kirby logo" width="150" /></a>
        <a href="/earthbound_timeline"><img src={earthboundLogo} alt="Earthbound logo" width="150" /></a>
        <a href="/fzero_timeline"><img src={fzeroLogo} alt="F-Zero logo" width="150" /></a>
        <a href="/dkc_timeline"><img src={dkcLogo} alt="Donkey Kong Country logo" width="150" /></a>
        <a href="/starfox_timeline"><img src={starfoxLogo} alt="Starfox logo" width="150" /></a>
        <a href="/warioland_timeline"><img src={warioLogo} alt="Wario logo" width="150" /></a>
        <a href="/megaman_timeline"><img src={megamanLogo} alt="Megaman logo" width="150" /></a>
        <a href="/megamanx_timeline"><img src={megamanxLogo} alt="Megaman X logo" width="150" /></a>
        <a href="/dq_timeline"><img src={dqLogo} alt="Dragon Quest logo" width="150" /></a>
        <a href="/smashbros_timeline"><img src={smashbrosLogo} alt="Smash Bros logo" width="150" /></a>
        <a href="/castlevania_timeline"><img src={castlevaniaLogo} alt="Castlevania logo" width="150" /></a>
      </div>
    </div>
  );
}

export default HistoryIndex;
