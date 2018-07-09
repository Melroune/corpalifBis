import React from "react"

import Styled from "styled-components"

import Onglet from "./Onglet.js"
import OngletRouge from "./OngletRouge.js"
import OngletDropDown from "./OngletDropDown01"
import OngletImg from "./OngletImg.js"

const onglet1 = [
  { name: "La CORPALIF", to: "/news?id=1" },
  { name: "Orientations régionales", to: "/news?id=2" },
  { name: "Adhérer", to: "/news?id=3" },
  { name: "Contact", to: "/news?id=4" }
]

const onglet2 = [
  { name: "La démarche palliative", to: "/news?id=5" },
  { name: "Les structures de prise en charge", to: "/news?id=6" },
  { name: "Accompagner son proche", to: "/news?id=7" },
  { name: "Législation", to: "/news?id=8" }
]
const onglet4 = [
  { name: "Offres d'emploi", to: "/news?id=13" },
  { name: "Formation", to: "/news?id=14" }
]
const onglet5 = [
  { name: "Recommandations", to: "/news?id=9" },
  { name: "Actualités", to: "/news?id=10" },
  { name: "Evènements", to: "/news?id=11" },
  { name: "Nos rencontres", to: "/news?id=12" }
]

// JSX
const BigNavigation = () => (
  <nav>
    <Ul className="BigNavigation">
      <OngletImg />
      <OngletDropDown name="COORDINATION RÉGIONALE" onglet={onglet1} />
      <OngletDropDown name="LES SOINS PALLIATIFS" onglet={onglet2} />
      <Onglet children="ANNUAIRE FRANCILIEN" href={"annuaire-francilien"} />
      <OngletDropDown name="EMPLOI / FORMATION" onglet={onglet4} />
      <OngletDropDown name="VEILLE MÉDICALE" onglet={onglet5} />
      <OngletRouge
        children="FORMULAIRE D'ADMISSION EN USP"
        href={"formulaire-d-admission-en-usp"}
      />
    </Ul>
  </nav>
)

// Styled-components
// eslint-disable
const Ul = Styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  background-color: rgb(16, 73, 73);
`
// eslint-enable

export default BigNavigation
