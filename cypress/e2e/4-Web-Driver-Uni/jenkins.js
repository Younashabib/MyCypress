/*
Jenkins is automation platform that allows to buld, test and deploy software using pipelines
Provides web Gui to perform tasks like source control management, pre and post build actions, Build triggers.

Jenkins infrastructure:
Master Server: Control pipelines, and schedule builds
Agents/Minions: Perform the Build

Workflow: 

1. Developer commits some code to a GIT repository > Jenkins master becomes aware of this commit and triggers appropriate pipeline and distributes to one of the agents to run
2. Agent is selected based on Configured Labels
3. Agent runs the build (Linux command) to build test and distritbute code
two types of agents: 
permanent agents (windows servers, need to have java installed), 
cloud agents (Docker, AWS etc), 

























































*/
