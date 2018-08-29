# client-cert-proxy

I wanted to use Netflix' [go-jira](https://github.com/Netflix-Skunkworks/go-jira) CLI with a JIRA service protected by mutual SSL authentication. This project allows this by creating a UNIX pipe which go-jira / JIRA can interface with.
