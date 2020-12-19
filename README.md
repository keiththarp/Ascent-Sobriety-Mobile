# Ascent-Sobriety-2
Ascent Sobriety is a non-linear sobriety tracking app intended to keep folks positive and motivated on their path to sobriety and recovery.

Working on dev environment set up

## Setting up dev environment

Start here - https://reactnative.dev/docs/environment-setup

**- React Native CLI Quickstart**

## Mac
### error when installing Watchman
```
Error: Permission denied @ apply2files - /usr/local/lib/node_modules/serverless/node_modules/.bin/detect-libc
```
Fixed by using the second answer (with more votes) here - https://stackoverflow.com/questions/61899041/how-to-fix-the-error-permission-denied-apply2files-usr-local-lib-node-modul
```
sudo chown -R $(whoami):admin /usr/local/* \
&& sudo chmod -R g+rwx /usr/local/*
```

### Error installing cocoapods
```
ERROR: Could not find a valid gem 'cocoapods' (>= 0) in any repository
```
- Solved by allowing Xcode to complete install of simulator then shut down Xcode and all terminal instances. Restarted computer, opened terminal and entered `sudo gem install cocoapods`
- But then is wasn't solved, I ended up using `brew install cocoapods` and I think that did it.
# STOP after installing cocoapods