import React from "react"

import Styled from "styled-components"

import Onglet from "./Onglet.js"
import OngletRouge from "./OngletRouge.js"
import OngletDropDown from "./OngletDropDown01"
import OngletImg from "./OngletImg.js"

const onglet1 = [
  { name: "La CORPALIF", to: "/news?id=1" },
  { name: "Présentation de association", to: "/news?id=2" },
  { name: "Objectifs et missions", to: "/news?id=3" },
  { name: "Partenaires", to: "/news?id=4" },
  { name: "Orientations régionales", to: "/news?id=5" },
  { name: "Le parcours patient", to: "/news?id=6" },
  { name: "Adhérer", to: "/news?id=7" },
  { name: "Pourquoi adhérer", to: "/news?id=8" },
  { name: "Contact", to: "/news?id=9" }
]

const onglet2 = [
  { name: "La démarche palliative", to: "/news?id=10" },
  { name: "Qu'est-ce que les soins palliatifs", to: "/news?id=11" },
  { name: "Vrai / Faux", to: "/news?id=12" },
  { name: "Les structures de prise en charge", to: "/news?id=13" },
  { name: "Législation", to: "/news?id=14" },
  { name: "Accompagner son proche", to: "/news?id=15" },
  { name: "Être aidant", to: "/news?id=16" },
  { name: "Liens utiles", to: "/news?id=17" },
  { name: "Témoignage", to: "/news?id=18" }
]
const onglet4 = [
  { name: "Offres d'emploi", to: "/news?id=19" },
  { name: "Formations", to: "/news?id=20" }
]

const onglet5 = [
  { name: "Recommandations", to: "/news?id=21" },
  { name: "Actualités", to: "/news?id=22" },
  { name: "Évènements", to: "/news?id=23" },
  { name: "Nos rencontres", to: "/news?id=24" }
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
