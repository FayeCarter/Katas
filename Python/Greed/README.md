# Greed

[Source](https://github.com/ardalis/kata-catalog/blob/master/katas/Greed.md)

Player rolls 5 dice. Score is calculated using this scoring chart.

A single one (100 points)
A single five (50 points)
Triple ones [1,1,1] (1000 points)
Triple twos [2,2,2] (200 points)
Triple threes [3,3,3] (300 points)
Triple fours [4,4,4] (400 points)
Triple fives [5,5,5] (500 points)
Triple sixes [6,6,6] (600 points)

| Input | Output |
| --- | --- |
| [2,3,4,6,2] | 0 |
| [1, 2, 3, 4, 3] | 100 |
| [5, 2, 3, 2, 4] | 50 |
| [1, 2, 3, 4, 5] | 150 |
| [1, 1, 1, 2, 3] | 1000 |
| [2, 2, 2, 1, 5] | 350 |