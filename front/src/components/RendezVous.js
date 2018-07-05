import React from 'react';

import Styled from 'styled-components';

import BaliseH1 from './BaliseH1.js';
import BaliseP from './BaliseP.js';
import BalisePBold from './BalisePBold.js';
import BaliseP80 from './BaliseP80.js';
import RedButtonDiv from './RedButtonDiv.js';


// JSX
const RendezVous = () => 
  <article>
    <div className="row">
      <DivInformation>
          <BaliseH1 children="Les rendez-vous" />
          <DivCentrer>
            <DivFloat>
              
              <ul className="row">

                <div className="row col-6">
                  <DivCenter className="column col-4">
                    <BaliseP80 children="18"></BaliseP80>
                    <BalisePBold children="Mars"></BalisePBold> {/* margin-top: -30px; */} 
                  </DivCenter>
                  <DivAlignTextStart className="column col-8">
                    <BaliseP children="Assemblée Générale de la CORPALIF"></BaliseP>
                    <BaliseP children="Maison médicale Claire Demeure"></BaliseP>
                    <BaliseP children="12 rue Porte de Buc"></BaliseP>
                    <BaliseP children="78000 Versailles"></BaliseP>
                  </DivAlignTextStart>
                </div>

                <div className="row col-6">
                  <DivCenter className="column col-4">
                    <BaliseP80 children="25"></BaliseP80>
                    <BalisePBold children="Avril"></BalisePBold>
                  </DivCenter>
                  <DivAlignTextStart className="column col-8">
                    <BaliseP children="Journée régionale Aura des EMSP"></BaliseP>
                    <BaliseP children="IFSI de Clermont-Ferrand"></BaliseP>
                  </DivAlignTextStart>
                </div>

              </ul>

            </DivFloat>
          </DivCentrer>
          <RedButtonDiv alt="Onglet: Veille médicale => Évènements" children="Plus d'évènements"/>
      </DivInformation>
    </div>
  </article>


// Styled-components
// eslint-disable 
const DivCenter = Styled.div`
  text-align: center;
`;

const DivAlignTextStart = Styled.div`
  text-align: flex-start;
`;

const DivInformation = Styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 50px;

  background-color: rgb(205, 217, 217);
`;

const DivCentrer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 15px;
`;

const DivFloat = Styled.div`
  display: flex;
  flex-direction: column;

  width: 1000px;
`;
// eslint-enable


export default RendezVous