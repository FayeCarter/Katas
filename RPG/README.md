# RPG Combat Game

Source: [https://github.com/ardalis/kata-catalog](https://github.com/ardalis/kata-catalog)

## Background

This is a fun kata that has the programmer building simple combat rules, as for a role-playing game (RPG). It is implemented as a sequence of iterations. The domain doesn't include a map or any other character skills apart from their ability to damage and heal one another.

## Instructions

Complete each iteration before reading the next one.

It's recommended you perform this kata with a pairing partner and while writing tests.

## Iteration One

1. All Characters, when created, have:

- [X] Health, starting at 1000
- [X] Level, starting at 1
- [X] May be Alive or Dead, starting Alive (Alive may be a true/false)

2. Characters can Deal Damage to Characters.

- [X] Damage is subtracted from Health
- [X] When damage received exceeds current Health, Health becomes 0 and the character dies

3. A Character can Heal a Character.

- [X] Dead characters cannot be healed
- [X] Healing cannot raise health above 1000

## Iteration Two

- [X] 1. A Character cannot Deal Damage to itself.

- [X] 2. A Character can only Heal itself.

3. When dealing damage:

- [X] If the target is 5 or more Levels above the attacker, Damage is reduced by 50%
- [X] If the target is 5 or more levels below the attacker, Damage is increased by 50%

## Iteration Three
- [X] 1. Characters have an attack Max Range.

- [X] 2. Melee fighters have a range of 2 meters.

- [ ] 3. Ranged fighters have a range of 20 meters.

- [ ] 4. Characters must be in range to deal damage to a target.