if ($env:appveyor_repo_branch -ne 'master') {
  Write-Output "This commit was made against $env:appveyor_repo_branch and not master! No deploy!"
  exit 0
}

if ($env:appveyor_pull_request_number) {
  Write-Output "This commit was made in a pull request! No deploy!"
  exit 0
}

npm run clean 2> $null
npm run build 2> $null
