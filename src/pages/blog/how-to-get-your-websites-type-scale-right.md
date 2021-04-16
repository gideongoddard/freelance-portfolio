---
title: How to get your website's type scale right
date: 2021-04-12T14:47:26.288Z
featuredImage: /assets/optician.jpg
featuredImageAlt: Eye test
---
It's the year 2021. We really shouldn't still be seeing websites with text that's too small to read...but here we are, and it's still a thing.

### So, why are people making websites with text that you can't read?

I'm going to be kind and assume that nobody is setting `font-size: 8px` in their CSS to deliberately make website text so small that it takes a magnifying glass to read. I suspect that it's usually because people are actually making an effort to handle the different devices that users will view their websites on and are making their font sizes responsive.

Rather than just setting a fixed font size such as `font-size: 24px` a developer may choose to have the font size scale according to the viewport width like so: `font-size: 2.5vw`. In practice, this level of simplicity almost never works because you'll end up with text that's too small on narrow screens and too big on wide screens. For this reason, what you'll more commonly see is something like `font-size: calc(10px + 0.5vw)`. This uses the *calc()* CSS function to make a calculation that combines pixels and viewport width as units so that you have a base number of pixels with a responsive add-on.

**This sounds promising, but is also where it often goes wrong...**

The issue is that the more you scale up or down with the viewport width, the more the font size increases or decreases, and in some cases the narrowest and widest screens get forgotten and the unintended consequences are text that's too big and looks ridiculous or too small and can't be read.

### The solution is the *clamp()* CSS function

In recent years, CSS has seen *Flexbox* and *Grid* change the landscape a little. They've made doing simple things simple, after years of simple things being really quite hard to achieve. Whilst they rightly get a lot of attention and praise, what the *clamp()* function does for responsive typography seems to have gone a little under the radar.

What *clamp()* does is to take 3 values - a minimum, an ideal and a maximum. When the minimum and maximum values are absolute values and the ideal is a responsive value - such as `font-size: clamp(18px, 2.5vw, 24px)` - you get the responsive font scaling you want, but with an upper and lower bound that prevent the issues you get when using *calc()*.

Creating a type scale that gives your website a range of font sizes using this technique ensures that you'll always be have text that scales nicely for different screen widths but that it'll never be too small to read or too big to sit comfortably on the page. To make sure this works really well, set your bigger font sizes to scale up and down more than your smaller ones.

### Take a look at the type scale for this website

#### **Firstly, the CSS variables:**

![CSS variables for example type scale](/assets/type-scale-code.png)

#### **What this looks like on a desktop screen**

*(Sorry to those of you viewing this on a mobile, the biggest font sizes are gonna look HUUUGE)*

<p style="font-size: 60px">The quick brown fox jumps over the lazy dog.</p>
<p style="font-size: 48px">The quick brown fox jumps over the lazy dog.</p>
<p style="font-size: 36px">The quick brown fox jumps over the lazy dog.</p>
<p style="font-size: 30px">The quick brown fox jumps over the lazy dog.</p>
<p style="font-size: 24px">The quick brown fox jumps over the lazy dog.</p>
<p style="font-size: 20px">The quick brown fox jumps over the lazy dog.</p>
<p style="font-size: 18px">The quick brown fox jumps over the lazy dog.</p>



#### **What it looks like on a mobile screen**

<p style="font-size: 36px">The quick brown fox jumps over the lazy dog.</p>
<p style="font-size: 30px">The quick brown fox jumps over the lazy dog.</p>
<p style="font-size: 24px">The quick brown fox jumps over the lazy dog.</p>
<p style="font-size: 20px">The quick brown fox jumps over the lazy dog.</p>
<p style="font-size: 18px">The quick brown fox jumps over the lazy dog.</p>
<p style="font-size: 16px">The quick brown fox jumps over the lazy dog.</p>
<p style="font-size: 14px">The quick brown fox jumps over the lazy dog.</p>