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
                        <p>What I want to do is provide a working example of <span style={{letterSpacing: '2px', fontWeight: 700, textDecoration: 'underline', color: 'var(--primary-300)'}}>everything</span> that CSS flexbox can do. So what follows is a visual demonstration of the effect of every possible value of every possible flexbox property. Buckle up!</p>
                    </section>
                    <section>
                        <h2>The very basics.</h2>
                        <p>In this section, I'm going to keep the flexbox properties I use to a minimum, in order to focus on demonstrating what flexbox does by default. For starters, I'm going to keep the only flexbox property used on the flex containers to <code>display: flex;</code> and will focus on how the properties on the flex items within those flex containers affect the layouts.</p>
                        <h3>What happens by default?</h3>
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
                        <p>Here's what happens when the example above sees the flex items have <code>flex-grow: 1;</code> applied to them. You can see that the now grow to fill the container and that they've both grown at the same rate based on their initial widths.</p>
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
                        <p>Should we want them to grow at different rates, we can apply different values to the 'flex-grow' properties. In this example, Flex item 2 is given <code>flex-grow: 2;</code> and therefore grows at 2x the rate of Flex item 1.</p>
                        <div className={FlexboxStyles.flexContainer}>
                            <div className={FlexboxStyles.flexItem} style={{flexGrow: 1}}>
                                <h4>Flex item 1</h4>
                                <p>Lorem ipsum.</p>
                            </div>
                            <div className={FlexboxStyles.flexItem} style={{flexGrow: 2}}>
                                <h4>Flex item 2</h4>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    )
}

export default Flexbox