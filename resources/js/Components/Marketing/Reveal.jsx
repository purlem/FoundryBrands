import { motion, useReducedMotion } from 'motion/react';

// Distance (px) elements travel as they reveal. Kept subtle on purpose —
// motion should guide the eye, not announce itself.
const TRAVEL = 24;

const directionOffset = {
    up: { y: TRAVEL },
    down: { y: -TRAVEL },
    left: { x: TRAVEL },
    right: { x: -TRAVEL },
    none: {},
};

/**
 * Reveals its children as they scroll into view: a subtle fade + drift that
 * fires once. Honors `prefers-reduced-motion` by rendering the content
 * statically (no transform, no fade) so nothing is hidden from users who opt
 * out of animation.
 */
export default function Reveal({
    children,
    as = 'div',
    direction = 'up',
    delay = 0,
    duration = 0.6,
    className = '',
    amount = 0.3,
    ...props
}) {
    const reduceMotion = useReducedMotion();
    const MotionTag = motion[as] ?? motion.div;

    if (reduceMotion) {
        const Tag = as;
        return (
            <Tag className={className} {...props}>
                {children}
            </Tag>
        );
    }

    const offset = directionOffset[direction] ?? directionOffset.up;

    return (
        <MotionTag
            className={className}
            initial={{ opacity: 0, ...offset }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount }}
            transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
            {...props}
        >
            {children}
        </MotionTag>
    );
}

/**
 * Wraps a list/grid so its children reveal in sequence as the group enters
 * the viewport. Pair with <RevealItem> for each child.
 */
export function RevealStagger({
    children,
    as = 'div',
    className = '',
    stagger = 0.08,
    amount = 0.2,
    ...props
}) {
    const reduceMotion = useReducedMotion();
    const MotionTag = motion[as] ?? motion.div;

    if (reduceMotion) {
        const Tag = as;
        return (
            <Tag className={className} {...props}>
                {children}
            </Tag>
        );
    }

    return (
        <MotionTag
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: stagger } },
            }}
            {...props}
        >
            {children}
        </MotionTag>
    );
}

const itemVariants = {
    hidden: { opacity: 0, y: TRAVEL },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

/** A single child inside <RevealStagger>. */
export function RevealItem({ children, as = 'div', className = '', ...props }) {
    const reduceMotion = useReducedMotion();
    const MotionTag = motion[as] ?? motion.div;

    if (reduceMotion) {
        const Tag = as;
        return (
            <Tag className={className} {...props}>
                {children}
            </Tag>
        );
    }

    return (
        <MotionTag className={className} variants={itemVariants} {...props}>
            {children}
        </MotionTag>
    );
}
