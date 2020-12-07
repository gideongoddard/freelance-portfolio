import React from "react"
import DesignSystemStyles from "./design-system.module.css"

export default function StyleGuide() {
    return (
        <main>
          <section className={DesignSystemStyles.section}>
            <h1>Type scale</h1>
            <p>The type scale consists of 7 font sizes, each of which is a calculation combining <em>px</em> and <em>vw</em> units. Larger sizes scale up and down more than smaller sizes.</p>
            <hr />
            <div className={`${DesignSystemStyles.type} ${DesignSystemStyles.xxl}`}>The quick brown fox jumped over the lazy dog.</div>
            <div className={`${DesignSystemStyles.type} ${DesignSystemStyles.xl}`}>The quick brown fox jumped over the lazy dog.</div>
            <div className={`${DesignSystemStyles.type} ${DesignSystemStyles.l}`}>The quick brown fox jumped over the lazy dog.</div>
            <div className={`${DesignSystemStyles.type} ${DesignSystemStyles.m}`}>The quick brown fox jumped over the lazy dog.</div>
            <div className={`${DesignSystemStyles.type} ${DesignSystemStyles.s}`}>The quick brown fox jumped over the lazy dog.</div>
            <div className={`${DesignSystemStyles.type} ${DesignSystemStyles.xs}`}>The quick brown fox jumped over the lazy dog.</div>
            <div className={`${DesignSystemStyles.type} ${DesignSystemStyles.xxs}`}>The quick brown fox jumped over the lazy dog.</div>
          </section>
          <section className={DesignSystemStyles.section}>
            <h1>Colour palette</h1>
            <p>The colour palette consists of a set of 5 shades of primary and accent colours along with 9 shades of a neutral colour.</p>
            <hr />
            <h2>Primary</h2>
            <div className={DesignSystemStyles.colorClass}>
              <div className={`${DesignSystemStyles.color} ${DesignSystemStyles.primary100}`}></div>
              <div className={`${DesignSystemStyles.color} ${DesignSystemStyles.primary300}`}></div>
              <div className={`${DesignSystemStyles.color} ${DesignSystemStyles.primary500}`}></div>
              <div className={`${DesignSystemStyles.color} ${DesignSystemStyles.primary700}`}></div>
              <div className={`${DesignSystemStyles.color} ${DesignSystemStyles.primary900}`}></div>
            </div>
            <h2>Accent</h2>
            <div className={DesignSystemStyles.colorClass}>
              <div className={`${DesignSystemStyles.color} ${DesignSystemStyles.accent100}`}></div>
              <div className={`${DesignSystemStyles.color} ${DesignSystemStyles.accent300}`}></div>
              <div className={`${DesignSystemStyles.color} ${DesignSystemStyles.accent500}`}></div>
              <div className={`${DesignSystemStyles.color} ${DesignSystemStyles.accent700}`}></div>
              <div className={`${DesignSystemStyles.color} ${DesignSystemStyles.accent900}`}></div>
            </div>
            <h2>Neutral</h2>
            <div className={DesignSystemStyles.colorClass}>
              <div className={`${DesignSystemStyles.color} ${DesignSystemStyles.neutral100}`}></div>
              <div className={`${DesignSystemStyles.color} ${DesignSystemStyles.neutral200}`}></div>
              <div className={`${DesignSystemStyles.color} ${DesignSystemStyles.neutral300}`}></div>
              <div className={`${DesignSystemStyles.color} ${DesignSystemStyles.neutral400}`}></div>
              <div className={`${DesignSystemStyles.color} ${DesignSystemStyles.neutral500}`}></div>
              <div className={`${DesignSystemStyles.color} ${DesignSystemStyles.neutral600}`}></div>
              <div className={`${DesignSystemStyles.color} ${DesignSystemStyles.neutral700}`}></div>
              <div className={`${DesignSystemStyles.color} ${DesignSystemStyles.neutral800}`}></div>
              <div className={`${DesignSystemStyles.color} ${DesignSystemStyles.neutral900}`}></div>
            </div>
          </section>
          <section className={DesignSystemStyles.section}>
            <h1>Shadows</h1>
            <p><em>Description to be added...</em></p>
            <hr />
          </section>
        </main>
    )
  }