# GSAP Animations Guide

This document provides a detailed breakdown of the GSAP (GreenSock Animation Platform) animations used in the Dua Lighting Experience project. All major scroll-based animations are orchestrated within the main homepage component: `src/app/page.tsx`.

## Core Concepts

- **GSAP**: A professional-grade animation library for JavaScript. It's used here to create high-performance, complex animations.
- **ScrollTrigger**: A GSAP plugin that links animations to the user's scroll position. This is the foundation for most of the site's dynamic effects.
- **Timeline**: A GSAP feature that allows for sequencing multiple animations together, with precise control over timing and overlap.
- **SplitText**: A GSAP plugin used to split text into characters, words, or lines, allowing each to be animated individually.
- **`useLayoutEffect`**: The React hook used to safely create and manage GSAP animations within a React component lifecycle.

---

## 1. Main Content Reveal

- **File**: `src/app/page.tsx`
- **Elements**: `contentRef`, `heroRef`

### Logic

This animation creates a smooth transition from the immersive hero section to the main content area. As the user scrolls down past the hero, the main content container, which starts as slightly faded, becomes fully opaque.

- **Trigger**: The animation is triggered by the `heroRef` element.
- **Start**: It begins when the `top` of the hero section aligns with the `top` of the viewport (`start: 'top top'`).
- **End**: It completes when the user has scrolled a distance equal to 50% of the viewport's height past the start point (`end: '+=50%'`).
- **Scrub**: `scrub: true` links the animation's progress directly to the scrollbar's position, making it feel smooth and reactive.

### Code Breakdown

```javascript
gsap.fromTo(contentRef.current, 
  { opacity: 0.05 }, // Starts at 5% opacity
  { 
    opacity: 1, // Animates to full opacity
    scrollTrigger: {
      trigger: heroRef.current,
      start: 'top top',
      end: '+=50%',
      scrub: true,
    }
  }
);
```

---

## 2. Philosophy Section Text Animation

- **File**: `src/components/page/home/philosophy-section.tsx`
- **Elements**: `.philosophy-title`, `.artistry-el`, `.expertise-el`, `.meets-el`

### Logic

This is a sequenced animation designed to reveal the section's core message, "Artistry meets Expertise," in a dynamic, overlapping fashion.

1.  **Heading Reveal**: The main title fades and slides in, character by character.
2.  **Artistry & Expertise**: "Artistry" slides down from above, and "Expertise" slides up from below.
3.  **Meets**: "meets" fades in and scales up in the center.

- **Timeline**: A `gsap.timeline` is used to orchestrate this multi-step sequence.
- **Trigger**: The animation starts when the top of the section is 70% down the viewport (`start: 'top 70%'`).
- **Overlap**: Negative position parameters (`"-=0.7"`) are used in the timeline to make the animations overlap, creating a more fluid and professional effect.

### Code Breakdown

```javascript
const philosophyTl = gsap.timeline({ ... });

// 1. Animate main title characters
philosophyTl.from(philosophySplit.chars, {
  opacity: 0.2, y: 20, stagger: 0.02
});

// 2. Animate "Artistry" and "Expertise"
.from([artistryEl, expertiseEl], {
  autoAlpha: 0, // Fades in
  y: (i) => (i === 0 ? -40 : 40), // Animates from opposite vertical positions
}, "-=0.7") // Overlap with previous animation

// 3. Animate "meets"
.from(meetsEl, {
  autoAlpha: 0,
  scale: 0.5,
}, "-=0.4"); // Overlap again
```

---

## 3. Services Section Animation

- **File**: `src/components/page/home/services-section.tsx`
- **Elements**: `.service-text-reveal`, `.service-item`

### Logic

This animation first reveals the section's descriptive text word by word, then slides in each of the service cards from the left.

1.  **Initial State**: The service cards (`serviceItems`) are initially set to be transparent and moved 30px to the left (`opacity: 0, x: -30`).
2.  **Text Reveal**: The heading and paragraph text fade in, word by word.
3.  **Card Reveal**: The service cards animate to full opacity and their final horizontal position (`opacity: 1, x: 0`).

- **Stagger**: The `stagger` property is used on both animations to create a sequential reveal effect for the words and the cards.

### Code Breakdown

```javascript
// Set the starting state for the cards
gsap.set(serviceItems, { opacity: 0, x: -30 });

const servicesTl = gsap.timeline({ ... });

// 1. Animate the text, word by word
servicesTl.from(serviceTextSplit.words, {
    opacity: 0.2, y: 10, stagger: 0.01
});

// 2. Animate the service cards into view
.to(serviceItems, {
    opacity: 1,
    x: 0,
    stagger: 0.05
}, "-=0.5"); // Overlap with text animation
```
