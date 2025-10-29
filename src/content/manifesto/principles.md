---
title: Principles
order: 2
---

# Principles

We consider three guiding principles:

1. **Autonomy** - the goal of allowing individuals to pursue meaningful lives of their own choosing, subject only to the constraint that they permit the same to others (the Golden Rule)
2. **Progress** - building a better society, as defined by delivering value to its participants
3. **Fairness** - when the interests of individuals conflict, the outcome should be fair

## Autonomy

If there was only one individual in the world, there would be no right or wrong. There would just be *choices* freely made, and consequences enjoyed (or suffered) subject to the constraints of reality. There would be no need for policies, manifestos or social contracts.

Individuals with autonomy define good and bad according to their own preferences, and decide accordingly. We can define *value* as a subjective, probability weighted metric that represents these preferences over outcomes. This can be viewed as a variant subjective expected utility theory as first proposed by von Neumann and Morgenstern (1944) and further developed by Savage (1954).

To illustrate this, consider a simplified world with three possible outcomes that the individual cares about (in order of preference):

- Eat fish (best)
- Eat fruit
- Eat nothing (worst)

How can we assign numeric values to these? Without loss of generality, consider the best outcome to be worth `100` and the worst to be worth `0` (the scale doesn't matter). But how much is fruit worth ('X')? We can't simply assume `X=50`, since the individual might be very hungry and be almost as happy with fruit as fish. Or the might be very bored of fruit, and consider it little better than nothing.

The answer depends on probability weighting. Consider the options the individual faces:


| Decision |Outcome | Value |
| --- | --- | --- |
| Go fishing | `P` chance of fish,<br>`(1-P)` chance of nothing | `P x 100` |
| Pick fruit | Guaranteed fruit | `X` |
| Stay idle | Guaranteed nothing | `0` |

We can now calculate X by considering what weight of probability P would cause the individual to be indifferent between fishing and fruit picking. In this case, the value must be equal (no preference) so:

```
X = P * 100
```

If the probability weight `P=0.3` caused indifference, for example, then `X = 30`.

A rational individual will try to maximise value, so in this case the individual will go fishing if `P > 0.3`, pick fruit if `P < 0.3`, possibly do either if `P=0.3` exactly, and never stay idle.


## Progress

The principle of progress is that we should be able to improve outcomes for society as a whole. We take a long term view of this: short term gains and "feels" are unimportant compared to long term outcomes. We measure progress not by GDP alone, but by expanded options and opportunities for individuals to exercise their autonomy.

Progress implies that changes benefit individuals in society, i.e. that they obtain better outcomes (and therefore more value). Any Pareto improvement (improvement in the outcomes of at least one individual without making any other worse off) is progress.

A net increase in value that has distributional effects (i.e. the average individual benefits, some may be worse off, but not by as much as those who benefit) might also be regarded as progress - though we should also expect such effects to be fair, which leads us onto the final principle.

## Fairness

Fairness

Everyone should benefit from progress, so fairness implies that everyone should be given better outcomes under a well-run society (at least compared to a situation where the benefits of society were not provided).

Sometimes *social choice* may result in negative effects on some individuals. Fairness required that they are properly compensated for these effects. This should always be possible, since if the choice is a net benefit for society as a whole, there must have been sufficient value created to fully compensate and individual losses.

It is very important to note that fairness does *not* imply equal outcomes. Outcomes are significantly affected by individual choices (which we guarantee by the principle of autonomy) and chance (if you choose to take a risk, you do well or badly, but it was your choice....). Society's role is enabler, not an equaliser: if risks are chosen freely, rewards (or losses) are owned.

We consider economic exchange between two individuals as fair if:

- It occurs at a fair price (such as one set by a fair competitive market, no unfair bargaining power / monopoly etc.)
- Both individuals are willing and able to make the exchange (no coercion etc.)
- Any externalities (costs to 3rd parties and society as a whole) are compensated
