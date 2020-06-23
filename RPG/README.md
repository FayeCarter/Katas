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

- [ ] Damage is subtracted from Health
- [ ] When damage received exceeds current Health, Health becomes 0 and the character dies

3. A Character can Heal a Character.

- [ ] Dead characters cannot be healed
- [ ] Healing cannot raise health above 1000