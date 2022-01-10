import * as React from "react"
import { Helmet } from "react-helmet"
import * as FlexboxStyles from "./flexbox-demo.module.css"

function FlexContainer({ children, style }) {
    return (
        <div className={FlexboxStyles.flexContainer} style={style}>
            {children}
        </div>
    )
}

function FlexItem({ num, children, style }) {
    return (
        <div className={FlexboxStyles.flexItem} style={style}>
            <h4>Flex item {num}</h4>
            {children}
        </div>
    )
}

function Flexbox() {
    return (
        <>
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
                        <p>The initial values for flexbox properties that are applicable to flex items are:</p>
                        <ul>
                            <li><code>flex-grow: 0;</code></li>
                            <li><code>flex-shrink: 1;</code></li>
                            <li><code>flex-basis: auto;</code></li>
                            <li><code>order: 0;</code></li>
                            <li><code>align-self: auto;</code></li>
                        </ul>
                        <FlexContainer>
                            <FlexItem num={1}>
                                <p>Lorem ipsum.</p>
                            </FlexItem>
                            <FlexItem num={2}>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </FlexItem>
                        </FlexContainer>
                        <h3>flex-grow</h3>
                        <p>Unlike the initial value for flex-grow (which is the equivalent of '0'), you can see that the flex items now grow to fill the container and that they've both grown at the same rate based on their initial widths.</p>
                        <ul>
                            <li>Flex item 1: <code>flex-grow: 1;</code></li>
                            <li>Flex item 2: <code>flex-grow: 1;</code></li>
                        </ul>
                        <FlexContainer>
                            <FlexItem num={1} style={{flexGrow: 1}}>
                                <p>Lorem ipsum.</p>
                            </FlexItem>
                            <FlexItem num={2} style={{flexGrow: 1}}>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </FlexItem>
                        </FlexContainer>
                        <p>Should we want them to grow at different rates, we can apply different values to the 'flex-grow' properties. Here, Flex item 2 has grown at 3x the rate of Flex item 1.</p>
                        <ul>
                            <li>Flex item 1: <code>flex-grow: 1;</code></li>
                            <li>Flex item 2: <code>flex-grow: 3;</code></li>
                        </ul>
                        <FlexContainer>
                            <FlexItem num={1} style={{flexGrow: 1}}>
                                <p>Lorem ipsum.</p>
                            </FlexItem>
                            <FlexItem num={2} style={{flexGrow: 3}}>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </FlexItem>
                        </FlexContainer>
                        <h3>flex-shrink</h3>
                        <p>The flex-shrink property controls how a flex item adjusts to going below their initial size. The initial value demonstrated in all previous examples is equivalent to '1', so we've already seen the default behaviour demonstrated. Here, Flex item 1 doesn't shrink at all*, whilst Flex item 2 shrinks at 3x the default rate.</p>
                        <ul>
                            <li>Flex item 1: <code>flex-shrink: 0;</code></li>
                            <li>Flex item 2: <code>flex-shrink: 3;</code></li>
                        </ul>
                        <em style={{display: 'block', marginBottom: 10, fontSize: 'var(--type-xxs)', color: 'var(--neutral-200)'}}>* The width of the flex item is tied to the content inside it. As it happens, the font size is responsive and scales down for smaller screen sizes so the flex item also scales down...but because of the font size, not because of the 'flex-shrink' property.</em>
                        <FlexContainer>
                            <FlexItem num={1} style={{flexShrink: 0}}>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </FlexItem>
                            <FlexItem num={2} style={{flexShrink: 3}}>
                                <p>Esse veniam nostrud pariatur labore Lorem aliquip.</p>
                            </FlexItem>
                        </FlexContainer>
                        <h3>flex-basis</h3>
                        <p>This sets the initial size of the flex item, although keep in mind that values for 'flex-grow' and 'flex-shrink' may adjust resulting widths set by these values. Whilst the initial value is 'auto' (as seen in all previous examples), this example shows the three flex items have their sizing set using values of different units:</p>
                        <ul>
                            <li>Flex item 1: <code>flex-basis: 0;</code></li>
                            <li>Flex item 2: <code>flex-basis: 30%</code></li>
                            <li>Flex item 3: <code>flex-basis: 175px;</code></li>
                        </ul>
                        <FlexContainer>
                            <FlexItem num={1} style={{flexBasis: 0}}>
                                <p>Lorem ipsum.</p>
                            </FlexItem>
                            <FlexItem num={2} style={{flexBasis: '30%'}}>
                                <p>Lorem ipsum.</p>
                            </FlexItem>
                            <FlexItem num={3} style={{flexBasis: 175}}>
                                <p>Lorem ipsum.</p>
                            </FlexItem>
                        </FlexContainer>
                        <h3>align-self</h3>
                        <p>So this example introduces something slightly different - a flex container with a height that's greater than the height of the flex items. This brings about the possibility of aligning flex items in a specific way that takes precedence over any alignment set for flex containers. So here's what's going on here...</p>
                        <ul>
                            <li>Flex item 1: <code>align-self: flex-start;</code></li>
                            <li>Flex item 2: <code>align-self: flex-end;</code></li>
                            <li>Flex item 3: <code>align-self: center;</code></li>
                            <li>Flex item 4: <code>align-self: stretch;</code></li>
                        </ul>
                        <FlexContainer style={{height: 350}}>
                            <FlexItem num={1} style={{alignSelf: 'flex-start'}}>
                                <p>Lorem ipsum.</p>
                            </FlexItem>
                            <FlexItem num={2} style={{alignSelf: 'flex-end'}}>
                                <p>Lorem ipsum.</p>
                            </FlexItem>
                            <FlexItem num={3} style={{alignSelf: 'center'}}>
                                <p>Lorem ipsum.</p>
                            </FlexItem>
                            <FlexItem num={4} style={{alignSelf: 'stretch'}}>
                                <p>Lorem ipsum.</p>
                            </FlexItem>
                        </FlexContainer>
                        <h3>order</h3>
                        <p>The final flexbox property that can be applied at the level of the flex item rather than the flex container, is 'order', which allows us to alter the order in which items are displayed within the flex container.</p>
                        <ul>
                            <li>Flex item 1: <code>order: 2;</code></li>
                            <li>Flex item 2: <code>order: 1;</code></li>
                            <li>Flex item 3: <code>order: 3;</code></li>
                        </ul>
                        <FlexContainer>
                            <FlexItem num={1} style={{order: 2}}>
                                <p>Lorem ipsum.</p>
                            </FlexItem>
                            <FlexItem num={2} style={{order: 1}}>
                                <p>Lorem ipsum.</p>
                            </FlexItem>
                            <FlexItem num={3} style={{order: 3}}>
                                <p>Lorem ipsum.</p>
                            </FlexItem>
                        </FlexContainer>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Flexbox