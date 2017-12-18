install:
	$(eval NPM := $(shell /bin/bash -ec 'which npm'))
	$(NPM) install
