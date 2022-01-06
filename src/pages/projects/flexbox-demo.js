import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/Layout/Layout"
import * as FlexboxStyles from "./flexbox-demo.module.css"

function Flexbox() {
    return (
        <Layout>
            <Helmet>
                <title>Flexbox Demo | Gideon Goddard Digital</title>
            </Helmet>
            <div className={FlexboxStyles.wrapper}>
                <div className={FlexboxStyles.container}>
                    <section>
                        <h1>A complete demonstration of <span className="accent">CSS&nbsp;flexbox</span>.</h1>
                        <p style={{fontStyle: 'italic', color: 'var(--neutral-200)', maxWidth: 750}}>To get the full effect of these demonstrations, you'll need to be able to resize your browser window to view the layouts at varying widths. As such, mobile devices are not best suited for this.</p>
                    </section>
                    <section>
                        <h2>An introduction, but not to flexbox.</h2>
                        <p>You know what? I'm gonna spare you the background. There are <em>many</em> other sources with much better descriptions than I could give you of the why, when and how of flexbox's origins and principles. Check out <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#background" target="_blank" rel="noopener noreferrer">this great guide on CSS-Tricks</a> for starters.</p>
                        <p>What I want to do is provide a working example of <em>everything</em> that CSS flexbox can do. So what follows is a visual demonstration of the effect of every value option (within reason) of every possible flexbox property. Buckle up!</p>
                    </section>
                    <section>
                        <h2>Flex items.</h2>
                        <p>In this section, I'm going to focus on what you can do with the properties that apply to flex items and will ignore adding flexbox properties to flex containers, except of course for adding <code>display: flex;</code> so that we're actually using flexbox at all.</p>
                        <h3>Initial (default) values.</h3>
                        <p>In this first example, there are no flexbox properties applied to the flex items, so what you see is the default behaviour based on the container having its display property set to 'flex'.</p>
                        <p>The result is that the flex items display as a row, line up at the start of the conainer, do not grow to fill the container and do not wrap. What you will see is that space is allocated to items based on the content within them.</p>
                        <div className={FlexboxStyles.flexContainer}>
                            <div className={FlexboxStyles.flexItem}>
                                <h4>Flex item 1</h4>
                                <p>Lorem ipsum.</p>
                            </div>
                            <div className={FlexboxStyles.flexItem}>
                                <h4>Flex item 2</h4>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <h3>flex-grow</h3>
                        <p>Here's what happens when the example above sees the flex items have <code>flex-grow: 1;</code> applied to them. Unlike the initial value for flex-grow (which is the equivalent of '0'), you can see that they now grow to fill the container and that they've both grown at the same rate based on their initial widths.</p>
                        <div className={FlexboxStyles.flexContainer}>
                            <div className={FlexboxStyles.flexItem} style={{flexGrow: 1}}>
                                <h4>Flex item 1</h4>
                                <p>Lorem ipsum.</p>
                            </div>
                            <div className={FlexboxStyles.flexItem} style={{flexGrow: 1}}>
                                <h4>Flex item 2</h4>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <p>Should we want them to grow at different rates, we can apply different values to the 'flex-grow' properties. In this example, Flex item 2 is given <code>flex-grow: 3;</code> and therefore grows at 3x the rate of Flex item 1.</p>
                        <div className={FlexboxStyles.flexContainer}>
                            <div className={FlexboxStyles.flexItem} style={{flexGrow: 1}}>
                                <h4>Flex item 1</h4>
                                <p>Lorem ipsum.</p>
                            </div>
                            <div className={FlexboxStyles.flexItem} style={{flexGrow: 3}}>
                                <h4>Flex item 2</h4>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <h3>flex-shrink</h3>
                        <p>The flex-shrink property controls how a flex item adjusts to going below their initial size. This first example will move straight into the two flex items having different values for this, because the initial value that will be demonstrated in all previous examples is equivalent to '1'. Here, Flex item 1 is assigned <code>flex-shrink: 0;</code> whilst Flex item 2 is assigned <code>flex-shrink: 3;</code> meaning that Flex item 1 does not shrink at all, while Flex item 3 shrinks at 3x the default rate.</p>
                        <div className={FlexboxStyles.flexContainer}>
                            <div className={FlexboxStyles.flexItem} style={{flexGrow: 1, flexShrink: 0}}>
                                <h4>Flex item 1</h4>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className={FlexboxStyles.flexItem} style={{flexGrow: 1, flexShrink: 3}}>
                                <h4>Flex item 2</h4>
                                <p>Esse veniam nostrud pariatur labore Lorem aliquip.</p>
                            </div>
                        </div>
                        <h3>flex-basis</h3>
                        <p>This sets the initial size of the flex item. Whilst the initial (default) value is 'auto', this example shows the result if Flex item 1 is assigned <code>flex-basis: 0;</code> and Flex item 2 is assigned <code>flex-basis: 60%;</code>. Both of these items have their initial values for flex-grow and flex-shrink.</p>
                        <div className={FlexboxStyles.flexContainer}>
                            <div className={FlexboxStyles.flexItem} style={{flexBasis: 0}}>
                                <h4>Flex item 1</h4>
                                <p>Lorem ipsum.</p>
                            </div>
                            <div className={FlexboxStyles.flexItem} style={{flexBasis: '60%'}}>
                                <h4>Flex item 2</h4>
                                <p>Lorem ipsum.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    )
}

export default Flexbox