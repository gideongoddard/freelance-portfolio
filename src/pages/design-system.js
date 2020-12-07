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
            <p>The colour palette consists of a set of 5 shades of primary and accent colours along with 9 shades of a neutral colour. Each is on a scale that starts at 100 and ends at 900 with intermediate shades evenly distributed between those values - <em>e.g. primary-100, primary-300, primary-500, primary-700, primary-900</em></p>
            <hr />
            <h2>Primary</h2>
            <div className={DesignSystemStyles.panels}>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.primary100}`}></div>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.primary300}`}></div>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.primary500}`}></div>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.primary700}`}></div>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.primary900}`}></div>
            </div>
            <h2>Accent</h2>
            <div className={DesignSystemStyles.panels}>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.accent100}`}></div>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.accent300}`}></div>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.accent500}`}></div>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.accent700}`}></div>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.accent900}`}></div>
            </div>
            <h2>Neutral</h2>
            <div className={DesignSystemStyles.panels}>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.neutral100}`}></div>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.neutral200}`}></div>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.neutral300}`}></div>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.neutral400}`}></div>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.neutral500}`}></div>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.neutral600}`}></div>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.neutral700}`}></div>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.neutral800}`}></div>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.neutral900}`}></div>
            </div>
          </section>
          <section className={DesignSystemStyles.section}>
            <h1>Shadows</h1>
            <p>There are 5 box shadows to represent different levels of elevation from the page.</p>
            <hr />
            <div className={DesignSystemStyles.panels} style={{marginTop: 40, justifyContent: "space-between", backgroundColor: "var(--neutral-200)", padding: "5%", borderRadius: 10}}>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.xSmallShadow}`}></div>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.smallShadow}`}></div>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.mediumShadow}`}></div>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.largeShadow}`}></div>
              <div className={`${DesignSystemStyles.panel} ${DesignSystemStyles.xLargeShadow}`}></div>
            </div>
          </section>
        </main>
    )
  }