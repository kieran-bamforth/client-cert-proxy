# client-cert-proxy

I wanted to use Netflix' [go-jira](https://github.com/Netflix-Skunkworks/go-jira) CLI with a JIRA service protected by mutual SSL authentication. This project allows this by creating a UNIX pipe which go-jira / JIRA can interface with.

## Installation

Install this with Homebrew!

```
$ brew tap kieran-bamforth/repo
$ brew install client-cert-proxy
```

## Usage 

The service proxy is now available: 

```
$ brew services list
```

The socket is created at `/usr/local/var/client-cert-proxy.sock`—point your proxied traffic at it!
