# System Design #
## Tushar Roy ##
1. Introduction to System Design (subjective topic)
	1. Ask good questions (to define MVP)
		1. What features to add - work with interviewer
			1. Feature set must be small and go deeper
		2. How much to scale
			1. How much data to store
			2. What is the latency
			3. How many requests need to be handled per minute/second
	2. Don't use Buzzwords
		1. Don't use latest words - it may backfire
			1. We need to have in-depth knowledge on the topics
	3. **C**lear and organized thinking
		1. First define 50000 view
		2. Draw the right boxes
		3. Define actors
		4. Then go deeper into details
	4. **D**rive discussions (80-20 rule)
		1. I should be talking 80% of the time and interviewer 20% of the time
			1. Anticipate the problems in the solution and try to fix them pre-emptively
2. How to improve skills on the above:
	1. Personal experience - working with high scale systems
	2. Practice - Work with peers and friends and brainstorm to see what technologies we can use to solve the problem
	3. Gaining knowledge - blogs, videos
3. Basic features:
	1. Features
	2. Define APIs - what are the APIs
		1. Who is to call
	3. Availability
		1. If host went down
		2. If data center went down
	4. Latency and Performance
		1. Background job - latency is okay
		2. Customer facing - latency should be minimal
			1. Caching
			2. ...
	5. Scalability
		1. Is it going to work for 1000 users or 1M users
			1. Is it going to have good latency and performance
	6. Durability
		1. It may or may not be important
		2. Data
			1. Stored securely
			2. Data is not lost
			3. Data is not compromized
		3. If designing database, this aspect is important
	7. Class diagram
		1. Object oriented principles
			1. Design patterns
	8. Security & Privacy
		1. If designing an authentication system
	9. Cost effectiveness
		1. Is there any alternate solution
			1. Discuss pros and cons

### Concepts and Topics ###
1. Vertical vs Horizontal Scaling
	1. Vertical - add more memory, cpu, hardware (expensive but no distributed systems problem)
	2. Horizontal - add multiple hosts (cheaper but complexity involved with distributed systems)
2. CAP Theorem