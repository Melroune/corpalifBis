import React from "react"

import Styled from "styled-components"

import BaliseH1Green from "./BaliseH1Green.js"
import BalisePGreen18 from "./BalisePGreen18.js"
import BalisePBoldGreen18 from "./BalisePBoldGreen18.js"
import BalisePBold36Green from "./BalisePBold36Green.js"
import BaliseP120Green from "./BaliseP120Green.js"
import RedButtonDiv from "./RedButtonDiv.js"

// JSX
const RendezVous = () => (
  <article>
    <div className="row">
      <DivInformation>
        <BaliseH1Green children="Les rendez-vous" />
        <DivCentrer>
          <DivFloat>
            <ul className="row">
              <div className="row col-6">
                <DivCenter className="column col-4">
                  <BaliseP120Green children="16" />
                  <BalisePBold36Green children="Août" />{" "}
                  {/* margin-top: -30px; */}
                </DivCenter>
                <DivAlignTextStart className="column col-8">
                  <BalisePBoldGreen18 children="Assemblée Générale de la CORPALIF" />
                  <BalisePGreen18 children="Maison médicale Claire Demeure" />
                  <BalisePGreen18 children="12 rue Porte de Buc" />
                  <BalisePGreen18 children="78000 Versailles" />
                </DivAlignTextStart>
              </div>

              <div className="row col-6">
                <DivCenter className="column col-4">
                  <BaliseP120Green children="25" />
                  <BalisePBold36Green children="Octobre" />
                </DivCenter>
                <DivAlignTextStart className="column col-8">
                  <BalisePBoldGreen18 children="Journée régionale Aura des EMSP" />
                  <BalisePGreen18 children="IFSI de Clermont-Ferrand" />
                </DivAlignTextStart>
              </div>
            </ul>
          </DivFloat>
        </DivCentrer>
        <RedButtonDiv
          alt="Onglet: Veille médicale => Évènements"
          children="Plus d'évènements"
        />
      </DivInformation>
    </div>
  </article>
)

// Styled-components
// eslint-disable
const DivCenter = Styled.div`
  text-align: center;
`

const DivAlignTextStart = Styled.div`
  text-align: flex-start;
`

const DivInformation = Styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 50px;

  background-color: rgb(205, 217, 217);
`

const DivCentrer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 15px;
`

const DivFloat = Styled.div`
  display: flex;
  flex-direction: column;

  width: 1000px;
`
// eslint-enable

export default RendezVous
