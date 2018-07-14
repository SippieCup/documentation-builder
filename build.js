const yaml = require('js-yaml');
const semver = require('semver');
const fs = require('fs');

// Get document, or throw exception on error
try {
  var VERSIONS = yaml.safeLoad(fs.readFileSync('./VERSIONS.yml', 'utf8'));
  var latestVersion = VERSIONS.currentVersion;

  console.log("Unclean version",latestVersion);
  console.log("Clean version",semver.clean(latestVersion));
  console.log("Building the current version...",latestVersion);
} catch (e) {
  console.error(e);
}

console.log("Built successfully.");