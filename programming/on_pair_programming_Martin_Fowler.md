# On Pair Programming #
1. It pays of more in the medium and long-term
2. It is not as simple as two people working on the same computer
3. It is vital for collaborative teamwork and high quality software
4. Best programs and designs could be done by pairs
	1. We can criticise each other
	2. We can find each other's errors
	3. We can use the best ideas
5. Write all prod programs with two peaple sitting on one machine
	1. Kent Beck
6. Extreme programming - Kent Beck
	1. Pairing was introduced to wider audience
7. Pair programming:
	1. Two people write code together on one machine
	2. It involves a lot of communication
	3. They plan and discuss their work
	4. They clarify ideas on the way
	5. They discuss approaches and come to better solutions
8. [How to Pair](https://martinfowler.com/articles/on-pair-programming.html#HowToPair)
	1. Practical approaches to pair programming
	2. For starters or for betterment
9. [Benefits](https://martinfowler.com/articles/on-pair-programming.html#Benefits), [Challenges](https://martinfowler.com/articles/on-pair-programming.html#Challenges)
	1. Dive deeper into the
		1. Goals of pair programming
		2. Challenges that can keep us from those goals
	2. To understand why pair programming is good for software and team
	3. To get ideas on what to improve
10. [To pair or not to pair?](https://martinfowler.com/articles/on-pair-programming.html#ToPairOrNotToPair), [But really, why bother?](https://martinfowler.com/articles/on-pair-programming.html#ButReallyWhyBother)

## How to Pair ##
### Styles ###
#### Driver and Navigator ####
1. Role definitions
	1. Driver:
		1. person at the wheel (keyboard)
			1. Focuses on completing tiny goal at hand
			2. Ignores larger issues for the moment
			3. Needs to talk through what she is doing while doing it
	2. Navigator:
		1. Observer position:
			1. Observes while driver is typing
			2. She reviews the code on-the-go
			3. Gives directions and shares thoughts
			4. Has an eye on
				1. Larger issues
				2. Bugs
			3. Makes notes of potential next steps or obstacles
2. Why division?
	1. To have two different perspectives on the code
		1. Driver: 
			1. More tactial
			2. Thinks about details
			3. Thinks about lines of code at hand
		2. Navigator:
			1. More strategic
				1. Observing
				2. Have big picture in mind
3. Common flow:
	1. Start with reasonably well defined task
	2. Agree on one tiny goal at a time
		1. Can be defined by unit test
		2. Can be defined by commit message
		3. Can be written on a sticky note
	3. Switch keyboard and roles regularly
		1. Shared active participation keeps energy level up
		2. We can understand things better
	4. As navigator:
		1. Avoid "tactical" mode of thinking
			1. Leave details of code to driver
		2. Complement pair's tactical mode with medium-term thinking
		3. Park the following on sticky notes
			1. Next steps
			2. Potential obstacles
			3. Ideas
		4. Discuss the items on sticky notes after tiny goal is done (do not interrupt driver's flow)

#### Ping Pong ####
1. Technique: Embraces TDD [TDD](https://martinfowler.com/bliki/TestDrivenDevelopment.html)
	1. It is perfect when we have a clearly defined task and can be implemented in TDD way
2. Steps:
	1. "Ping": Developer A writes a failing test
	2. "Pong": Developer B writes the implementation to make it pass
	3. Developer B then starts the next "Ping"
	4. Each "Pong" can be followed by refactoring together (before moving onto the next failing test)
		1. Red-green-refactor approach
			1. Red: Write a failing test
			2. Green: Make it pass with minimum necessary means
			3. Refactor: [Refactor](https://martinfowler.com/tags/refactoring.html)
3. [Examples](https://www.sandimetz.com/99bottles/sample/)

#### Strong-Style Pairing ####
1. Style for knowledge transfer:
	1. [Llewellyn Falco Description](https://llewellynfalco.blogspot.com/2014/06/llewellyns-strong-style-pairing.html)
2. Rule:
	1. For idea to go from my head into computer MUST go through someone else's hands
	2. Navigator:
		1. Experienced person with setup or task at hand
	3. Driver:
		1. Novice (with language, tool, codebase, ...)
	4. Experienced person mostly stays in navigator role and guides novices
3. Driver trusts the navigator:
	1. He/she should be comfortable with incomplete understanding
		1. "Why" and challenges should be discussed after implementation session
	2. Very effective for total novices
4. Could be like micromanagement but useful onboarding tool to 
	1. Favor active "larning by doing"
	2. Unfavor passive "learning by watching"
5. Good for initial KT
6. Must not be overused
7. Actual goal: Switch roles (after sometime)
	1. If it is happening subsequently, it is a sign that KT worked

#### Pair Development ####
1. It is a mindset to have
	1. [Sarah Mei's Twitter account](https://twitter.com/sarahmei/status/877738639991611392)
2. [User story](https://martinfowler.com/bliki/UserStory.html)
	1. Requires other tasks too
		1. Must take care of all those things

##### Planning - What's Our Goal? #####
1. Don't jump immediately to coding
2. Catch misunderstandings
3. Catch missing prerequisites
4. **Understand the problem**
	1. Read through story and play back to each other how we understood it
	2. Clear open questions & potential misunderstandings with product owner
	3. If [Definition of Ready](https://www.agilealliance.org/glossary/definition-of-ready/) exists:
		1. Go through and ensure everything to get started exists
5. **Come up with a solution**
	1. Brainstorm potential solutions for the problem
	2. Together or split up and present each other's ideas to the other
		1. Depends on if solution is well-defined
		2. Depends on individual style
			1. Loud thinker
			2. Solo thinker
	3. If one of the pair is less familiar with domain or tech
		1. Take time to share necessary context with each other
6. **Plan the approach**
	1. Write the following in sticky notes:
		1. Steps to reach the solution
		2. Order of tasks
		3. Testing strategy
	2. Record to remember

##### Research and Explore #####
1. If both are unfamiliar with a technology
	1. Reasearch and explore
		1. This is not clean-cut, driver-navigator or ping-pong
2. Approach for pair development:
	1. Define list of questions (to be answered to come up with a suitable solution)
	2. Split up - divide questions or try to find answers for same questions separately
		1. Search internet separately
		2. Search other resources separately
		3. Read up on concept separately
	3. Get back together (after agreed upon timebox)
		1. Discuss and share what has been found 

##### Documentation #####
1. Work together on documentation
	1. Decide together if any documentation is required for what is done
	2. Write documentation together or one of us can write it and other can review
2. Helps discipline ourselves because it is often the last task and due to it's annoyance, it might be skipped otherwise

### Time Management ###
1. Pomodoro technique:
	1. Time management method
		1. Breaks work into chunks of time
			1. 25 minutes
				1. Separated by short breaks
2. Keeps focussed
3. Since pairing is exhaustive, take breaks and switch keyboard regularly
4. Example:
	1. Decide on what to work on next
	2. Set timer for 25 minutes
		1. pomodoro browser extensions
		2. Tomato shaped ketchup timer...
	3. Do some work without interruptions
	4. Pause work when timer rings
		1. Start short breaks (5 - 10 minutes)
			1. Used to really take break (tank energy)
				1. Get water
				2. Get coffee
				3. Use bathroom
				4. Get fresh air
				5. Don't do other work
		2. After 3 or 4 of "pomodoros", take long break (15-30 minutes)

### Pair Rotations ###
1. Rotating pairs:
	1. After working together for a while, one half leaves and other person is onboarded to continue
	2. Anchor: Person who stays
2. Why to rotate
	1. Lgoistics
		1. Could be sick or going on holiday
		2. Working remotely on a day (but work requires physical presence)
			1. Hardware setup say
	2. Mixing things:
		1. Cabin fever due to spending too much time together
		2. Tidious and energy draining tasks
		3. New person can bring fresh perspectives and energy
	3. Avoiding knowledge silos
	4. Increase collective code ownership
	5. More code reviews on the go
3. Frequency:
	1. Opinion: 2-3 days (to ensure sufficient knowledge spread and quality)
4. Cost of rotations:
	1. Onboard time
	2. Context switch cost
5. If no anchor:
	1. risk that knowledge about problem and solution space may get lost
6. Junior developers:
	1. Can stay a bit longer (sufficient time to immerse themselves in a topic)

### Plan the Day ###
### Physical Setup ###
### Remote Pairing ###
### Have a Donut Together ###
### Things to Avoid ###
### There is Not "THE" Right Way ###

## Benefits ##
### Knowledge Sharing ###
### Reflection ###
### Keeping Focus ###
### Code Review on-the-go ###
### Two Modes of Thinking Combined ###
### Collective Code Ownership ###
### Keeps the Team's WIP Low ###
### Fast Onboarding of New Team Members ###

## Challenges ##
### Pairing Can be Exhausting ###
### Intense Collaboration Can be Hard ###
### Interruptions by Meetings ###
### Different Skill Levels ###
### Power Dynamics ###
### Pairing with Lots of Unknowns ###
### No Time for Yourself ###
### Rotations Lead to Context Switching ###
### Pairing Requires Vulnerability ###
### Convincing Managers and Co-Workers ###

## To Pair or Not to Pair ##
### Boring Tasks ###
### "Could I Really Do This By Myself?" ###
### Code Review vs. Pairing ###

## But Really, Why Bother? ##