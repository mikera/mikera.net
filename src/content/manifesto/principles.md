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

Individuals with autonomy define good and bad according to their own preferences, and decide accordingly. We can define *value* as a subjective, probability weighted metric that represents these preferences over outcomes. To illustrate this, consider a simplified world with three possible outcomes that the individual cares about (in order of preference):

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


## Fairness
