#!/bin/bash

set -e


helptext () {
  echo "# oh no, no helptext. sad..."
}

run_action () {
  ACTION=$1

  if [[ "cmd" = $ACTION ]]
  then
    run_cmd ${@:2}

  elif [[ "dev-start" = $ACTION ]]; then
    run_cmd yarn watch ${@:2}

  elif [[ "npm" = $ACTION ]]; then
    run_cmd npm ${@:2}

  elif [[ "yarn" = $ACTION ]]; then
    run_cmd yarn ${@:2}

  elif [[ "help" = $ACTION ]]; then
    helptext
  else
    run_cmd npm $@
    exit 1
  fi
}


CMD_DOCKER="${CMD_DOCKER: true}"

run_cmd () {
    $@
  
}

run_action $@